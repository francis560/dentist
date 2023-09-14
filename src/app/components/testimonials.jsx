const Testimonials = () => {

    return (

        <section className="mb-40">
            <div className="mx-auto max-w-3xl text-center">
                <h3 className="text-2xl font-semibold">Testimonials</h3>

                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-64 h-1 my-8 bg-slate-200 border-0 rounded-md dark:bg-slate-600" />
                        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-slate-800">
                            <svg class="w-4 h-4 text-slate-700 dark:text-slate-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                        </div>
                </div>

                <p className="mb-6 pb-2 text-slate-500 text-justify dark:text-slate-300 md:mb-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                    error amet numquam iure provident voluptate esse quasi, veritatis
                    totam voluptas nostrum quisquam eum porro a pariatur veniam. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Quam alias mollitia
                    vitae vel. Eius architecto repellendus aspernatur nemo mollitia corporis
                    vero voluptate at quod aperiam culpa harum velit, non?
                </p>
            </div>

            <div className="grid gap-12 text-center md:grid-cols-2">

                <div className="mb-6 md:mb-0">
                    <div className="mb-6 flex justify-center">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(22).jpg"
                            className="w-24 rounded-md shadow-lg dark:shadow-black/30" />
                    </div>
                    <p className="my-4 text-xl text-slate-500 dark:text-slate-300">
                        "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                        elit sed ut perspiciatis unde omnis."
                    </p>
                    <p className="font-medium text-md text-slate-800">- Anna Morian -</p>
                </div>


                <div className="mb-0">
                    <div className="mb-6 flex justify-center">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(19).jpg"
                            className="w-24 rounded-md shadow-lg dark:shadow-black/30" />
                    </div>
                    <p className="my-4 text-xl text-slate-500 dark:text-slate-300">
                        "Neque cupiditate assumenda in maiores repudiandae mollitia
                        architecto elit sed adipiscing elit."
                    </p>
                    <p className="font-medium text-md text-slate-800">- Teresa May -</p>
                </div>
            </div>
        </section>

    );

}


export default Testimonials;