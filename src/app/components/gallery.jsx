import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Gallery = () => {

    const [selectedId, setSelectedId] = useState(null);

    const minimal = [
        {uri: "https://img.freepik.com/free-photo/dentist-attaching-metal-braces-patient-teeth_651396-2617.jpg?size=626&ext=jpg&ga=GA1.1.1572216556.1694524031&semt=sph", id: 1},
        {uri: "https://img.freepik.com/free-photo/female-dentist-work-during-man-s-teeth-check-up-dentist-office_651396-1896.jpg?size=626&ext=jpg&ga=GA1.1.1572216556.1694524031&semt=sph", id: 2},
        {uri: "https://img.freepik.com/free-photo/stomatologist-hands-examining-child-teeth-dental-office_651396-1890.jpg?size=626&ext=jpg&ga=GA1.1.1572216556.1694524031&semt=sph", id: 3},
        {uri: "https://img.freepik.com/free-photo/female-dentist-checking-boy-s-teeth-with-dental-mirror_23-2147905941.jpg?size=626&ext=jpg&ga=GA1.1.1572216556.1694524031&semt=sph", id: 4},
        {uri: "https://img.freepik.com/free-photo/close-up-woman-getting-dental-check-up_23-2147879219.jpg?size=626&ext=jpg&ga=GA1.2.1572216556.1694524031&semt=sph", id: 5},
        {uri: "https://img.freepik.com/free-photo/dentist-patient-posing-smiling_23-2148338146.jpg?size=626&ext=jpg&ga=GA1.2.1572216556.1694524031&semt=sph", id: 6},
        {uri: "https://img.freepik.com/free-photo/female-patient-having-procedure-done-dentist_23-2148985798.jpg?size=626&ext=jpg&ga=GA1.1.1572216556.1694524031&semt=sph", id: 7},
        {uri: "https://img.freepik.com/free-photo/young-female-patient-looking-mirror-check-teeth-matching-before-dental-procedure_23-2148985749.jpg?size=626&ext=jpg&ga=GA1.1.1572216556.1694524031&semt=sph", id: 8}
    ];

    return (
        
        <div className="mb-40">

            <h2 className="text-2xl font-semibold text-center text-slate-800">Gallery</h2>

            <hr class="w-48 h-1 mx-auto my-6 bg-slate-100 border-0 rounded-md md:mt-6 md:mb-12 dark:bg-slate-700"></hr>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                {minimal.map(item => (
                    <motion.img whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }} loading="lazy" className="rounded-md cursor-pointer" alt="illustration" key={item.id} src={item.uri} layoutId={item.id} onClick={() => setSelectedId({ id: item.id, uri: item.uri })} />
                ))}

            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div onClick={() => setSelectedId(null)} className="flex z-40 items-center justify-center fixed left-0 top-0 w-full h-full bg-slate-900/90" layoutId={selectedId}>
                        <motion.img className="rounded-md w-4/5 md:w-4/12" src={selectedId.uri} layoutId={selectedId.id} />
                    </motion.div>
                )}
            </AnimatePresence>

        </div>

    );

}


export default Gallery;