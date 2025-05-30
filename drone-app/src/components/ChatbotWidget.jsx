import { useState } from "react";

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput("");
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(
                "https://kooma-o3uso862m-hannavas2022s-projects.vercel.app/api/chat",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message: input }),
                }
            );

            if (!res.ok) throw new Error(`Error: ${res.statusText}`);

            const data = await res.json();
            const botMessage = { role: "assistant", content: data.reply };
            setMessages([...updatedMessages, botMessage]);
        } catch (err) {
            setError("Oops, something went wrong. Try again.");
            console.error("Chat error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                className="h-12 w-12 rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700 md:h-14 md:w-14"
                aria-label="Toggle chat"
            >
                💬
            </button>

            {/* Chat Panel */}
            {isOpen && (
                <div className="fixed bottom-20 right-4 mt-2 flex h-[75vh] w-[90vw] max-w-sm flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl md:static md:w-96 md:h-[32rem]">
                    <div className="border-b bg-blue-50 p-2 text-sm font-semibold">Chat with KoomaBot</div>

                    {/* Messages */}
                    <div className="flex-1 space-y-2 overflow-y-auto p-3 text-sm">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`rounded px-3 py-2 max-w-[80%] ${m.role === "user" ? "bg-blue-100" : "bg-gray-100"}`}>
                                    {m.content}
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="text-left italic text-gray-500">KoomaBot is typing...</div>
                        )}
                        {error && (
                            <div className="text-left italic text-red-600">{error}</div>
                        )}
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="flex gap-2 border-t p-2">
                        <input
                            className="flex-1 rounded border px-3 py-1 text-sm"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your question..."
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded bg-blue-600 px-4 py-1 text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
