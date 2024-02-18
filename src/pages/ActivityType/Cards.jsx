export default function Cards() {
    return (
        <div className="flex justify-center my-8">
            <div className="flex gap-8">
                <div className="card card-compact w-64 bg-base-100 shadow-xl">
                    <figure><img src="https://plus.unsplash.com/premium_photo-1680042813079-605c60b629f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Running" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Running</h2>
                        <p>If you want to run, run a mile. if you want to experience a different life, run a marathon.</p>
                        <div className="card-actions justify-end">
                            <button className="btn text-white" style={{backgroundColor: '#E76F6D'}}>
                                <a href="/activity-running">Learn more</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-64 bg-base-100 shadow-xl">
                    <figure><img src="public/images/walking.jpg" alt="walking" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Walking</h2>
                        <p>Walking is a man’s best medicine.</p>
                        <div className="card-actions justify-end">
                            <button className="btn text-white" style={{backgroundColor: '#E76F6D'}}>
                                <a href="/activity-walking">Learn more</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-64 bg-base-100 shadow-xl">
                    <figure><img src="public/images/SwimmingImg.jpg" alt="swimming" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Swimming</h2>
                        <p>Swimming Toward Healing: Swimming can be therapeutic.</p>
                        <div className="card-actions justify-end">
                            <button className="btn text-white" style={{backgroundColor: '#E76F6D'}}>
                                <a href="/activity-swimming">Learn more</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-64 bg-base-100 shadow-xl">
                    <figure><img src="public/images/Weight.jpg" alt="Weight training" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Weight training</h2>
                        <p>The last three or four reps is what makes the muscle grow.</p>
                        <div className="card-actions justify-end">
                            <button className="btn text-white" style={{backgroundColor: '#E76F6D'}}>
                                <a href="/activity-weight-training">Learn more</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-64 bg-base-100 shadow-xl">
                    <figure><img src="public/images/yoga.jpg" alt="Yoga" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Yoga</h2>
                        <p>Yoga teaches you how to listen to your body.</p>
                        <div className="card-actions justify-end">
                            <button className="btn text-white" style={{backgroundColor: '#E76F6D'}}>
                                <a href="/activity-yoga">Learn more</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
