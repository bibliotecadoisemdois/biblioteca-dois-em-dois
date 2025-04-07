"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function BibliotecaDoisEmDois() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 p-4 flex flex-col items-center justify-center text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-red-700 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Biblioteca Dois em Dois
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-red-800 max-w-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Cada e-book custa apenas <strong>R$2</strong>, e parte desse valor ajuda uma causa social. Um gesto simples que pode transformar vidas.
      </motion.p>
      <Card className="w-full max-w-md bg-white/70 backdrop-blur-md rounded-2xl shadow-lg">
        <CardContent className="p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">E-book em Destaque</h2>
          <p className="text-base text-red-700 mb-4 text-center">
            "O poder do hábito" — transforme sua vida com pequenas atitudes.
          </p>
          <Button className="bg-red-600 text-white hover:bg-red-700 w-full">
            Comprar por R$2
          </Button>
        </CardContent>
      </Card>
      <motion.div
        className="mt-8 flex items-center text-red-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Heart className="mr-2 text-red-500" />
        <p className="text-sm">De dois em dois, a gente muda o mundo.</p>
      </motion.div>
    </main>
  );
}
