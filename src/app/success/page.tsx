import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const Success = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center gap-6 max-w-[590px] mx-auto text-center px-6"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <CheckCircle className="w-32 h-32 text-green-500" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-4xl font-bold text-gray-900"
                >
                    Compra realizada com sucesso!
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-lg text-gray-600"
                >
                    Agradecemos pela sua compra. Em breve você receberá um e-mail com todos os detalhes do seu pedido.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <p className="text-sm text-gray-500">
                        Redirecionando para a página inicial em 5 segundos...
                    </p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Success
