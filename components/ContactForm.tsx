"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { cn } from "@/utils/cn";
import { toast } from "sonner";
import { FaLocationArrow, FaMapMarkerAlt, FaPhoneAlt, FaMailBulk, FaWhatsapp } from "react-icons/fa";

const contactSchema = z.object({
    name: z.string().min(3, "Name is required"),
    email: z.string().email("Invalid email"),
    message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactLinks = [
    {
        href: "mailto:sudeep.mint@gmail.com",
        label: "sudeep.mint@gmail.com",
        icon: <FaMailBulk className="h-4 w-4" />,
    },
    {
        href: "tel:+919302383944",
        label: "+91 93023 83944",
        icon: <FaPhoneAlt className="h-4 w-4" />,
    },
    {
        href: "https://www.google.com/maps/place/Ujjain,+Madhya+Pradesh,+India/@23.1807,75.7779,12z/data=!3m1!4b1!4m6!3m5!1s0x3962f8c8d8d8d8d8:0x1234567890abcdef!8m2!3d23.1807!4d75.7779!16zL20vMDNnZ2Y",
        label: "Ujjain, Madhya Pradesh, Bharat",
        icon: <FaMapMarkerAlt className="h-4 w-4" />,
    },
    {
        href: "https://wa.me/+919302383944",
        label: "Chat on Whatsapp",
        icon: <FaWhatsapp className="h-4 w-4" />,
    },
];


export function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            await axios.post("https://formspree.io/f/xvojadjn", data);
            reset();
            toast.success("Message sent successfully!");
        } catch (error) {
            console.error("Submission error", error);
            toast.error("Failed to send message. Please try again.");
        }
    };

    return (
        <section className="w-full py-16 px-4 md:px-8">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[50vw] text-center">
                    Ready to take <span className="text-purple">your</span> digital presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                </p>
            </div>

            <div className="mt-10 flex flex-col gap-8 max-w-3xl mx-auto">
                {/* Contact Form */}
                <div className="shadow-input w-full rounded-lg bg-white p-4 md:rounded-2xl md:p-8 dark:bg-transparent border border-white/[0.2]">
                    <h2 className="text-xl font-bold text-foreground">
                        Contact Me
                    </h2>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                        Feel free to reach out with any questions or opportunities.
                    </p>

                    <form className="my-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <LabelInputContainer>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" {...register("name")} placeholder="John Doe" aria-label="Enter your name" />
                            {errors.name && (
                                <p className="text-red-500 text-sm" role="alert">{errors.name.message}</p>
                            )}
                        </LabelInputContainer>

                        <LabelInputContainer>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" {...register("email")} placeholder="john@example.com" aria-label="Enter your email address" />
                            {errors.email && (
                                <p className="text-red-500 text-sm" role="alert">{errors.email.message}</p>
                            )}
                        </LabelInputContainer>

                        <LabelInputContainer>
                            <Label htmlFor="message">Message</Label>
                            <textarea
                                id="message"
                                {...register("message")}
                                placeholder="Write your message here..."
                                className="min-h-[120px] w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-neutral-500 focus:outline-none"
                                aria-label="Write your message"
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm" role="alert">{errors.message.message}</p>
                            )}
                        </LabelInputContainer>
                        <button
                            className="group/btn relative flex justify-center items-center gap-2 h-10 w-full rounded-md  font-medium text-white border border-white-100 disabled:opacity-50 disabled:cursor-not-allowed"
                            type="submit"
                            aria-label="Send message"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                            ) : (
                                <>
                                    <FaLocationArrow aria-hidden="true" />
                                    <span>Send Message</span>
                                </>
                            )}
                            <BottomGradient />
                        </button>
                    </form>
                </div>

                <div className="my-4 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                {/* Contact Info Panel */}
                <div className="flex flex-col space-y-4 text-white ">
                    {contactLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md px-4 font-medium backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200"
                            aria-label={`Contact via ${item.label}`}
                        >
                            {item.icon}
                            <span className="text-sm">{item.label}</span>
                            <BottomGradient />
                        </a>
                    ))}
                </div>

            </div >

        </section >
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};


const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
