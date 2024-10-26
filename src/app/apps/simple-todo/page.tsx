export default function TodoPage() {
    return (
        <main className="">
            <header>
                <div>Div left</div>
                <div>div right
                    <button>
                        setting icon
                    </button>
                </div>
            </header>
            <div className="">
                <header>
                    <h1>
                        Day, Month Date
                    </h1>
                    <div>
                        <form action="">
                            <input type="text" placeholder="Search todos" />
                            <select name="" id=""></select>
                            <button>cross</button>
                        </form>
                        <div>
                            <button>Add Todo</button>
                            <button>Remove Done</button>
                        </div>
                    </div>
                </header>
                <section>
                    <article>
                        <header>
                            <h1>Today</h1>
                        </header>
                        <div>
                            <div></div>
                            <p>Hurray!No more todos for today!</p>
                            <button>Add Todo</button>
                        </div>
                    </article>
                    <article>
                        <header>
                            <h1>This week</h1>
                        </header>
                        <div>
                            <div></div>
                            <p>Great!No mroe todos for this week!</p>
                            <button>Add Todo</button>
                        </div>
                    </article>
                    <article>
                        <header>
                            <h1>Eventually</h1>
                        </header>
                        <div>
                            <div></div>
                            <p>No other things to do.Have fun!</p>
                            <button>Add Todo</button>
                        </div>
                    </article>
                </section>
            </div>
            <footer>
                <small>
                    Built by
                    <a href="">Codezinc</a>
                    <a href="">GitHub</a>
                    <a href="">Twitter</a>
                </small>
            </footer>
        </main>
    );
}