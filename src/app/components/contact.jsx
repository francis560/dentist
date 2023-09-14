const Contact = () => {

    return (

        <div className="mb-24 flex flex-row space-x-6 bg-slate-50 rounded-md p-8">

            <form className="w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Name
                        </label>
                        <input placeholder="Name" className="appearance-none block w-full bg-slate-200 text-slate-700 border border-slate-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-slate-500" id="name" type="text" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Email
                        </label>
                        <input placeholder="Email" className="appearance-none block w-full bg-slate-200 text-slate-700 border border-slate-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-slate-500" id="email" type="email" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Message
                        </label>
                        <textarea className=" no-resize appearance-none block w-full bg-slate-200 text-slate-700 border border-slate-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-slate-500 h-48 resize-none" id="message"></textarea>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                        <button className="bg-slate-900 hover:bg-slate-800 focus:outline-none text-white font-regular py-2 px-6 rounded-md" type="button">
                            Send
                        </button>
                    </div>
                    <div className="md:w-2/3"></div>
                </div>
            </form>

            <img className="rounded-md w-2/5 object-cover" src="/people2.jpg" alt="" />

        </div>


    );

}


export default Contact;