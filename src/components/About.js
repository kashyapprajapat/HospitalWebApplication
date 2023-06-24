import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section class="text-cyan-400 bg-white-900 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://media.istockphoto.com/id/138205019/photo/happy-healthcare-practitioner.jpg?s=612x612&w=0&k=20&c=b8kUyVtmZeW8MeLHcDsJfqqF0XiFBjq6tgBQZC7G0f0="
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray">
            Dr.Vikram Shah
          </h1>
          <p class="leading-relaxed mb-8">
            "As a doctor, I am privileged to serve the noble profession of
            medicine, where my primary goal is to provide compassionate and
            effective care to those in need. Each day, I have the opportunity to
            make a positive impact on the lives of my patients, their families,
            and the community as a whole. My journey to becoming a doctor was a
            challenging yet fulfilling one. It began with years of rigorous
            education and training, where I immersed myself in the study of
            medical sciences, anatomy, physiology, pharmacology, and numerous
            other disciplines. The knowledge I gained laid the foundation for my
            medical practice and instilled in me a deep sense of responsibility
            towards the well-being of others. As a doctor, I am entrusted with
            the health and lives of my patients. I approach each patient
            encounter with empathy, actively listening to their concerns and
            providing personalized care tailored to their unique needs. It is my
            duty to diagnose and treat medical conditions, but I believe that
            healing extends beyond the physical aspect. I strive to establish a
            strong doctor-patient relationship built on trust, respect, and open
            communication, ensuring that my patients feel heard and actively
            involved in their own healthcare journey. In the course of my
            practice, I have witnessed both the joys of healing and the
            challenges of dealing with human suffering. I have celebrated the
            triumphs of successful treatments and recoveries, and I have also
            faced the heart-wrenching moments when despite our best efforts, we
            are unable to achieve the desired outcomes. Through it all, I remain
            committed to providing the highest standard of care, continuously
            expanding my knowledge, and embracing advancements in medical
            research and technology. Being a doctor means being a lifelong
            learner. The medical field is ever-evolving, with new discoveries,
            techniques, and treatments emerging regularly. To stay at the
            forefront of medical knowledge, I engage in continuous professional
            development, attending conferences, participating in workshops, and
            staying updated with the latest medical literature. By staying
            abreast of advancements, I can provide my patients with the best
            possible care, integrating evidence-based medicine into my practice.
            In addition to direct patient care, I also recognize the importance
            of preventive medicine and community health. I strive to educate my
            patients about healthy lifestyle choices, disease prevention, and
            early detection. By promoting wellness and advocating for public
            health initiatives, I aim to empower individuals and communities to
            take control of their own health. While the medical profession can
            be demanding and challenging, the rewards are immeasurable. The
            smiles of gratitude from a patient whose pain has been alleviated,
            the joy of witnessing a life saved, and the deep satisfaction of
            making a positive impact are the driving forces that keep me
            motivated. Every day, I am reminded of the profound privilege it is
            to be entrusted with the well-being of others, and I am honored to
            dedicate my life to serving as a doctor."
          </p>
          <div class="flex justify-center">
            <Link to="/appointment">
              <button class="inline-flex text-white bg-cyan-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">
                Book Your Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
