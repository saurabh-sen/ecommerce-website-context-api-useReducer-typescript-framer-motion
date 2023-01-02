import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useFollowPointer } from "./useFollow";

const Animate = () => {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <>
     <motion.div className="fixed top-0 left-0 right-0 h-1 bg-pink-500" style={{ scaleX, transformOrigin: '0%',}} />  
      <div className="bg-pink-300">
        <motion.div className="w-1/4 m-auto text-3xl py-8 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          labore expedita voluptates, asperiores dolores nemo quod vero, eveniet
          quasi, quisquam ipsam doloremque accusamus porro sint delectus modi
          minima autem accusantium! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Minima in possimus sequi est provident voluptates
          iusto mollitia minus facilis totam eius eos itaque aperiam veritatis
          pariatur nam inventore neque, veniam officiis sit! Corporis molestiae
          porro quia repudiandae. Assumenda inventore saepe eaque nemo, nam quos
          reiciendis, esse tenetur maxime, debitis nulla quas eum officiis iste
          sapiente illum quidem vero ad ullam iure deleniti odit laborum
          voluptas rerum. Doloremque aperiam, id, iste molestiae voluptatem
          reiciendis deleniti rem itaque iusto totam, perferendis officiis. Qui
          quaerat praesentium explicabo dolorum obcaecati est placeat. Quod
          distinctio omnis quaerat pariatur. Rerum eos velit qui, laboriosam nam
          tempore expedita sapiente nemo blanditiis veritatis! Molestiae
          deleniti rerum vero laboriosam sapiente dolore quibusdam, nostrum
          vitae neque nesciunt ducimus tenetur placeat. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Veritatis dolor veniam corrupti
          praesentium sapiente. Ducimus illum provident aspernatur expedita,
          doloribus, ab accusamus veritatis perspiciatis, enim magni hic
          quibusdam doloremque ipsa explicabo asperiores iste! Officia iste
          incidunt maiores eligendi mollitia veniam sint temporibus dolorem
          totam recusandae odit itaque nihil, quam deleniti? Suscipit quasi
          molestias rerum nisi ea, ducimus placeat. Autem numquam cupiditate
          placeat delectus ad quam atque dignissimos doloremque enim unde
          deleniti accusamus incidunt iure, quos ut sint odio consectetur esse,
          eos reiciendis corrupti pariatur. Molestiae minima omnis recusandae
          deleniti magnam, assumenda distinctio. Tenetur quam odio ipsa saepe
          dicta quis alias assumenda esse, minus quod possimus, iste impedit
          aliquam animi fugiat ab pariatur nisi earum architecto magnam ea. Sit,
          repudiandae error?
        </motion.div>
        <motion.div 
        
        ref={ref}
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001
        }}
        className="m-auto text-3xl py-8 w-[150px] h-[150px] rounded-full bg-[#ff0066]">

        </motion.div>
      </div>
    </>
  );
};

export default Animate;
