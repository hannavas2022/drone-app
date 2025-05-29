import { useState } from "react";

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userMessage = { role: "user", content: input };
        const updatedMessages = [...messages, userMessage];

        setMessages(updatedMessages);
        setInput("");

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: updatedMessages }),
            });

            const data = await res.json();
            const botMessage = data.choices[0].message;
            setMessages([...updatedMessages, botMessage]);
        } catch (err) {
            console.error("Chat error:", err);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={toggleChat}
                className="h-12 w-12 rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700"
            >
                ??
            </button>

            {isOpen && (
                <div className="mt-2 flex h-96 w-80 flex-col overflow-hidden rounded-lg bg-white shadow-lg">
                    <div className="border-b bg-blue-50 p-2 text-sm font-semibold">Chat with KoomaBot</div>
                    <div className="flex-1 space-y-2 overflow-y-auto p-2 text-sm">
                        {messages.map((m, i) => (
                            <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                                <span className="inline-block rounded bg-gray-100 px-2 py-1">{m.content}</span>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className="flex gap-2 border-t p-2">
                        <input
                            className="flex-1 rounded border px-2 py-1 text-sm"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your question..."
                        />
                        <button
                            type="submit"
                            className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
