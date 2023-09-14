const Header = () => {

    return (
        
        <div className="flex header h-screen my-4 rounded-md">

            <div className="my-auto w-3/5">
                <span className="font-semibold text-slate-800 text-md">¡Lorem, ipsum dolor!</span>
                <h1 className="text-6xl font-semibold mt-2 bg-gradient-to-r from-slate-400 to-slate-800 bg-clip-text text-transparent">Lorem ipsum dolor sit, amet lorem consectetur adipisicing elit.</h1>
                <p className="text-md my-6 text-justify font-normal text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla deleniti laudantium ipsa hic placeat eveniet inventore dolorum, illum asperiores quod natus aspernatur. Blanditiis corporis veniam voluptatibus. Accusantium, totam odit.</p>
                <button className="px-6 py-2 hover:bg-slate-600 font-medium rounded-md bg-slate-800 text-white">Contact</button>
            </div>

        </div>

    );

}


export default Header;