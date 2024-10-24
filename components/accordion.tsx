"use client"

import { motion, AnimatePresence } from "framer-motion"
import FaqDropDownIcon from "/public/zapbarbearia/dropdown-icon-black.svg"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
import { cn } from "@/lib/utils"

type Accordion = {
  index: number;
  setExpanded: Dispatch<SetStateAction<boolean | number>>;
  expanded: boolean | number;
  title: string;
  description: string;
}

const descVariants = {
  open: { opacity: 1, height: "auto" },
  collapsed: { opacity: 0, height: 0 }
}

const Accordion = ({ index, title, expanded, setExpanded, description }: Accordion) => {
  const isOpen = index === expanded

  return (
    <motion.li
      initial={false}
    >
      <button className="w-full" onClick={
        () => setExpanded(isOpen ? false : index)
      }>
        <h3 className="flex gap-4 sm:gap-6 font-medium text-lg text-start sm:text-[1.5rem]">
          <Image
            className={cn("transition-transform duration-300", isOpen && "-rotate-180")}
            src={FaqDropDownIcon}
            alt="Ícone de expansão"
          /> {title}</h3>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={descVariants}
            transition={{ duration: .2 }}
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

export default Accordion