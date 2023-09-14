const navbar = () => {

    return (

        <div className="bg-slate-200 w-full mb-4 flex flex-row justify-between rounded-md p-4 opacity-90 sticky top-3">

            <i className="fi fi-sr-tooth text-2xl text-slate-800 cursor-pointer"></i>
            
            <div className="space-x-6">
                <a className="text-slate-800 hover:text-slate-500 font-medium" href="">Home</a>
                <a className="text-slate-800 hover:text-slate-500 font-medium" href="">About</a>
                <a className="text-slate-800 hover:text-slate-500 font-medium" href="">Service</a>
                <a className="text-slate-800 hover:text-slate-500 font-medium" href="">Testimonials</a>
                <a className="text-slate-800 hover:text-slate-500 font-medium" href="">Gallery</a>
                <a className="text-slate-800 hover:text-slate-500 font-medium" href="">Contact</a>
            </div>
        
        </div>

    );

}


export default navbar;