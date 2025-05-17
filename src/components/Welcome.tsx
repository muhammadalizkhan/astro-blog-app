import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Welcome() {
  return (
    <motion.div
      className="p-8 bg-red-500 text-white rounded-xl shadow-md space-y-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-white">Welcome to Astro!</h1>
      <p className="text-white">Get started by editing this file.</p>
      <Button variant="default">Test shadcn/ui Button</Button>
    </motion.div>
  );
}
