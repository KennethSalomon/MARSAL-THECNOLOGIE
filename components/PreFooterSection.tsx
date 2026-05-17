"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, Sparkles } from "lucide-react";

const PreFooterSection = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    alert("Merci pour votre inscription !");
    setEmail("");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto overflow-hidden">
      <motion.div
        className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-cyan-marsal/20 bg-neutral-50 dark:bg-obsidian/40 backdrop-blur-xl group"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-marsal/5 via-transparent to-magenta-marsal/5 opacity-50 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-marsal/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-magenta-marsal/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid h-full grid-cols-1 items-center gap-6 p-6 md:p-10 lg:grid-cols-2">
          <div>
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-cyan-marsal/30 bg-cyan-marsal/5 text-cyan-marsal text-[9px] font-mono-tech tracking-widest uppercase mb-3"
            >
              <Sparkles size={12} />
              Accès Privilégié
            </motion.div>

            <motion.h2
              className="text-2xl md:text-3xl font-light leading-tight tracking-tight text-neutral-900 dark:text-white"
              variants={itemVariants}
            >
              Restez à la pointe de l'<span className="text-cyan-marsal font-bold">innovation</span>
            </motion.h2>

            <motion.p
              className="mt-3 max-w-xl text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed"
              variants={itemVariants}
            >
              Inscrivez-vous à notre lettre d'information exclusive pour recevoir les dernières tendances en domotique de luxe et sécurité intelligente.
            </motion.p>
          </div>

          <motion.div
            className="flex w-full max-w-md flex-col"
            variants={itemVariants}
          >
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-4 sm:flex-row p-2 rounded-2xl bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 backdrop-blur-md"
            >
              <Input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 flex-grow bg-white dark:bg-neutral-950 text-sm text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-800 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus-visible:ring-1 focus-visible:ring-cyan-500 px-3 rounded-lg"
                required
              />
              <Button
                type="submit"
                size="sm"
                className="h-10 px-5 rounded-lg bg-cyan-marsal text-obsidian text-xs font-bold hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                S'inscrire
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-[10px] text-neutral-500 dark:text-neutral-500 font-mono-tech uppercase tracking-widest text-center sm:text-left"
            >
              Respect de la vie privée garanti. Désinscription en un clic.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PreFooterSection;
