import underConstructionImage from './images/Construction.jpg'; // Correct path to the image

function TechSupport() {
    return (
        <div className="flex flex-col items-center justify-start">
            <h2 className="mt-6 mb-6 text-center text-3xl font-bold">Tech Support</h2>
            <div className="under-construction mb-4">
                <img
                    src={underConstructionImage}
                    alt="Under Construction"
                    className="h-auto max-w-full rounded-xl object-cover"
                />
            </div> {/* <-- Missing closing div tag */}
        </div>
    );
}

export default TechSupport;
