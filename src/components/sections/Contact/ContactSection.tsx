import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import { validateEmail } from '@/utils/validation';
import { TypingText } from '@/components/shared/TypingText';
import { fadeInUp } from '@/utils/animations';
import Confetti from 'react-confetti';

export const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [windowDimension, setWindowDimension] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 0, 
    height: typeof window !== 'undefined' ? window.innerHeight : 0 
  });
  const formRef = useRef<HTMLFormElement>(null);

  const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/monicasrikrish@gmail.com";

  const confettiColors = ['#A855F7', '#22D3EE', '#EC4899', '#F59E0B', '#FFFFFF'];

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize(); 
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.target as HTMLFormElement;
    const emailInput = form.querySelector('input[name="email"]') as HTMLInputElement;

    if (emailInput && !validateEmail(emailInput.value)) {
      e.preventDefault();
      alert("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    e.preventDefault();

    if (typeof window === 'undefined') {
        setIsSubmitting(false);
        alert("Environment error. Please try again.");
        return;
    }

    const formData = new FormData(form);
    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      payload[key] = value.toString();
    });

    fetch(FORMSUBMIT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
      redirect: 'manual' 
    })
      .then(response => {
        if (response.type === 'opaqueredirect' || response.status === 200 || response.status === 302) {
          setIsSubmitting(false);
          setIsSubmitted(true);
          formRef.current?.reset();
        } else {
          setIsSubmitting(false);
          alert("An error occurred during submission. Response Status: " + response.status);
        }
      })
      .catch(error => {
        setIsSubmitting(false);
        alert("Network error. Please check your connection.");
        console.error('Submission error:', error);
      });
  };

  const cardClassName = 'card-hover-effect card-default-border-light';

  return (
    <motion.div
      {...fadeInUp}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto text-center"
    >
      {isSubmitted && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          numberOfPieces={250} 
          recycle={false} 
          gravity={0.5}
          colors={confettiColors}
          run={isSubmitted} 
        />
      )}

      <div className="section-card p-8 card-hover-effect card-default-border-light">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Let's connect!</h3>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="p-8 h-48 flex items-center justify-center relative"
            >
              <TypingText 
                text="Thank you for filling out the form, we'll get in touch soon!" 
              />
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
              ref={formRef}
              className="space-y-6"
            >
              <input type="hidden" name="_next" defaultValue={typeof window !== 'undefined' ? window.location.href : ''} />
              <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
              
              <input type="hidden" name="_gotcha" style={{display:'none'}} /> 
              
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 focus:border-gray-800 dark:focus:border-gray-300 outline-none transition-colors duration-200 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 focus:border-gray-800 dark:focus:border-gray-300 outline-none transition-colors duration-200 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 focus:border-gray-800 dark:focus:border-gray-300 outline-none transition-colors duration-200 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
              ></textarea>
              <button type="submit" disabled={isSubmitting} className="w-full button-send-message py-2 dark:text-black rounded-full transition-colors duration-300 inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
                <Send size={20} className="flex-shrink-0" />
                <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
