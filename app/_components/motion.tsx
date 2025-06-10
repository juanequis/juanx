"use client"

import { chakra /*, shouldForwardProp*/ } from "@chakra-ui/react"
import { motion } from "motion/react"

/** @TODO review this, try different approach. Maybe all this code is unnecesary  */
// export const MotionBox = chakra(motion.div, {}, {
//   shouldForwardProp: (prop) =>
//     isValidMotionProp(prop),
// })

// export const MotionText = chakra(motion.p, {}, {
//   shouldForwardProp: (prop) =>
//     isValidMotionProp(prop),
// })

export const MotionBox = chakra(motion.div)

export const MotionText = chakra(motion.p)
