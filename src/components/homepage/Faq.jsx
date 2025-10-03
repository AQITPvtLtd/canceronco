"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faq = [
    {
        question: "Who gets cancer?",
        answer: `Anyone can get cancer, although the risk goes up with age. Your individual risk depends on factors such as whether you smoke, lifestyle choices such as what you eat and how much you exercise, your family history of cancer, and factors in your workplace and environment.`
    },
    {
        question:
            "My family has a history of genetic cancer. My grandmother, grandfather, and my father's sister died of it. What can I do?",
        answer: `
    <p style="text-align: start;color: rgb(102, 102, 102);background-color: rgb(255, 255, 255);font-size: 15px;font-family: Roboto, sans-serif;">Although cancer is common, only 5-10% of it is hereditary, which means someone has inherited a higher risk for cancer from a parent. The risk of cancer can be inherited through a small change (called a mutation) in a gene that can be passed from one generation to the next. Cancer is a hereditary disease, meaning that inherited gene mutations account for about 5 to 10% of all cases. If there has been more than one generation of cancer, it might be considered hereditary. A family history means that one or more of your blood relatives has been diagnosed with breast or ovarian cancer. These relatives may be deceased or still living. It may be parents, siblings, or children of first-degree relatives. Most cancer patients do not have a family history of the disease. It is estimated that about 5% to 10% of cancer cases can be inherited. Myth: If my family has cancer, I will get it too. The fact is, there are times when members of the same family develop cancer due to shared behaviors.</p>
<p style="text-align: start;color: rgb(102, 102, 102);background-color: rgb(255, 255, 255);font-size: 15px;font-family: Roboto, sans-serif;">It is impossible for cancer genes to skip generations. One in two (50%) chances are that you have inherited a gene mutation from your parents. In other words, whether you have it or not. It is impossible for you to pass the mutation on to your children if you do not inherit it. Therefore, some children will carry the faulty gene and be at increased risk of developing cancer, while others will not.</p>`
    },
    {
        question: "How can I contact Dr. Sajjan Rajpurohit?",
        answer: `<p><span style="text-align: start;color: rgb(102, 102, 102);background-color: rgb(255, 255, 255);font-size: 15.3333px;font-family: Roboto, sans-serif;">Get in touch with the&nbsp;</span><a href="https://canceronco.com/about-dr-sajjan-rajpurohit/" style="text-align: start;font-size: 15.3333px;font-family: Poppins, sans-serif;"><span style="color: rgb(0, 0, 0);">best medical oncologist in Delhi</span></a><span style="text-align: start;color: rgb(102, 102, 102);background-color: rgb(255, 255, 255);font-size: 15.3333px;font-family: Roboto, sans-serif;">, Dr. Sajjan Rajpurohit, by filling out this contact form or dialing +91-9871280511.</span></p>`
    },
    {
        question: "How can I know if I have cancer?",
        answer: `It's very possible to have cancer without knowing it. The symptoms of cancer are many and varied. Generally, it might look like a lump or swelling in your body. Sometimes, cancer can be hard to spot because it can start as a painless area of skin that does not itch or cause a rash.`
    },
    {
        question: "How does cancer start?",
        answer: `<p style="text-align: start;color: rgb(102, 102, 102);background-color: rgb(255, 255, 255);font-size: 15px;font-family: Roboto, sans-serif;">In our cells, DNA acts as a set of instructions that tells them how to behave. When our DNA becomes damaged over time, it can lead to cancer.</p>
<p style="text-align: start;color: rgb(102, 102, 102);background-color: rgb(255, 255, 255);font-size: 15px;font-family: Roboto, sans-serif;">UV rays and drinking alcohol can increase the risk of receiving this type of cancer.</p>`
    },
    {
        question: "What are the different treatments that compliment cancer?",
        answer: `<p style="text-align: start;color: rgb(102, 102, 102);background-color: rgb(255, 255, 255);font-size: 15px;font-family: Roboto, sans-serif;">Various modalities commonly used in cancer treatment are-</p>
<ul style="text-align: start;color: rgb(68, 68, 68);list-style-type: disc;background-color: rgb(255, 255, 255);list-style-position: inside;font-size: 15px;font-family: Roboto, sans-serif;">
    <li>Hormone Therapy</li>
    <li>Radiotherapy</li>
    <li>Chemotherapy</li>
    <li>Targeted therapy</li>
    <li>Immunotherapy</li>
    <li>ROBOTIC SURGERY</li>
    <li>CAR-T CELL THERAPY</li>
</ul>
<p style="text-align: start;color: rgb(102, 102, 102);background-color: rgb(255, 255, 255);font-size: 15px;font-family: Roboto, sans-serif;">The choice of treatment depends on the type of cancer, presentation stage, age, patient&apos;s general condition, pathology, and molecular reports. All these factors are taken into consideration before making a treatment decision. Many cancers require multi-modality treatments e.g. surgery followed by chemo or radiotherapy, concurrent chemo-radiotherapy, chemo-immunotherapy, etc. Consultations with a surgical oncologist, radiation oncologist, and medical oncologist are required in such scenarios.</p>`
    },
    {
        question: "Can cancer spread from one person to another?",
        answer: `Many people believe that cancer is a contagious disease, but that is merely a myth. According to doctors, this is an inherited disease that occurs when the genes are abnormally mutated. It is not a contagious disease. Many cancer patients may contract secondary infections from being close to infected persons when undergoing chemotherapy or immunosuppressive treatments. Good hygiene should be followed to ensure their safety.`
    },
    {
        question: "Is cancer curable?",
        answer: `That depends on the type of cancer and the stage of presentation. When caught early and treated properly, many types of cancer are associated with fairly high cure rates. The chances of survival have improved recently due to advances in technology and treatment modalities, even in advanced stages. With targeted treatments and immunotherapies, many patients with many advanced cancers previously considered untreatable are living longer with a reasonably good quality of life.`
    },
    {
        question: "What type of cancer does immunotherapy treat?",
        answer: `The best candidates for Immunotherapy are patients with non–small cell lung cancer, which is diagnosed about 80 to 85% of the time. This type of lung cancer usually occurs in former or current smokers, although it can be found in nonsmokers. It is also more common in women and younger patients.`
    },
    {
        question: "How much does a biopsy cost?",
        answer: `Typically, the average biopsy test cost in India may range from INR 4000 to INR 5000.`
    }
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white">
            <section className="bg-white">
                <section className="w-full px-8 md:px-16 lg:px-24 py-12">
                    <h2 className="text-3xl font-bold text-center mb-10 text-black"style={{ fontFamily: "Roboto Slab, serif" }}>
                        FREQUENTLY ASKED <span className="text-teal-500">QUESTIONS</span>
                    </h2>
                    <div className="space-y-4">
                        {faq.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 rounded-md shadow-sm overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between text-black items-center px-6 py-4 text-left font-medium hover:bg-gray-200 transition"
                                >
                                    <span>{faq.question}</span>
                                    <ChevronRight
                                        className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-90" : ""
                                            }`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div
                                        className="px-6 pb-4 text-gray-600 bg-white"
                                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </section>
    );
}
