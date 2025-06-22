import { motion } from "motion/react"
import { CheckCircle } from 'lucide-react'
import { redirect } from 'next/navigation'
import { stripe } from '@/lib/stripe';
import Redirect from "./redirect";

export default async function SuccessPage({ searchParams }: { readonly searchParams: { readonly session_id: string } }) {
    const { session_id } = searchParams
    if (!session_id)
        throw new Error('Please provide a valid session_id (`cs_test_...`)')

    const {
        status,
        customer_details: { email: customerEmail }
    } = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    })

    if (status === 'open') {
        return redirect('/')
    }
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center justify-center gap-6 max-w-[590px] mx-auto text-center px-6">
                <div>
                    <CheckCircle className="w-32 h-32 text-green-500" />
                </div>

                <h1 className="text-4xl font-bold text-gray-900">
                    Compra realizada com sucesso!
                </h1>

                <p className="text-lg text-gray-600">
                    Agradecemos pela sua compra. Em breve você receberá um e-mail com todos os detalhes do seu pedido.
                </p>

                <Redirect />

                <div>
                    <p>Session ID: {session_id}</p>
                </div>
            </div>
        </div>
    )
}