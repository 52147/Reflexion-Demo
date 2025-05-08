import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "@/components/ui/button";

export default function AboutModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <button onClick={() => setIsOpen(true)}     className="text-sm bg-[#364153] text-white hover:bg-blue-800 px-4 py-2 rounded-md transition"
        >
        
          About this page
        </button>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-h-[80vh] overflow-y-auto mx-auto max-w-lg rounded-xl bg-blue-50 dark:bg-gray-900 p-6 shadow-xl">
            <Dialog.Title className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
              About Reflexion
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Reflexion: An AI-Powered Platform for Guided Emotional
              Self-Reflection
            </Dialog.Description>
            <div className="space-y-4 text-sm text-gray-800 dark:text-gray-100">
              <p>
                <strong>Reflexion</strong> is a scalable, non-clinical digital
                wellness platform that leverages artificial intelligence and
                human-centered design to foster emotional self-awareness,
                cognitive insight, and psychological resilience. It provides an
                accessible interface for individuals seeking structured
                reflection outside of traditional therapeutic contexts.
              </p>
              <p>
                The project is part of a broader effort to expand equitable
                access to emotionally supportive technologies—particularly for
                underserved populations who lack consistent access to mental
                health care. By combining reflective writing, emotion
                classification, and AI-guided feedback, Reflexion aims to
                promote emotional literacy as a foundational skill for personal
                development and community well-being.
              </p>
              <p>
                <strong>How it works:</strong>
                <br />
                1. Choose a topic for self-reflection (e.g., Identity,
                Relationships, Career).
                <br />
                2. Describe your thoughts and feelings in natural language.
                <br />
                3. Use emotion tags, or allow the system to suggest
                classifications.
                <br />
                4. Receive supportive, non-directive feedback and next-step
                prompts.
                <br />
                5. Optionally download or revisit your session later for
                tracking and insight.
              </p>

              <p>
                ⚠️ <strong>Note:</strong>
                The current implementation serves as a minimal viable prototype,
                designed to demonstrate core functionality and user interaction
                logic. This early version does not yet include topic selection,
                emotion tagging, or session history tracking. Current
                functionality focuses on:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Submission of a short free-text reflection</li>
                <li>
                  AI-powered multi-emotion classification with percentage
                  breakdown
                </li>
                <li>Primary emotion highlight (dominant mood)</li>
                <li>Radar chart visualization for emotional spread</li>
                <li>
                  Cognitive insight analysis based on input tone and themes
                </li>
                <li>Personalized suggestion and follow-up reflective prompt</li>
              </ul>

              <p>
                A feature-rich version is currently under development, with
                modules planned for longitudinal emotional analysis, cognitive
                distortion detection, and behavioral insight modeling.
              </p>

              <p>
                If you're interested in the development of scalable, AI-enhanced
                psychological tools, you can follow the project's updates and
                contribute feedback through the following links:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Project Landing Page:{" "}
                  <a
                    href="https://reflexionai.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    reflexionai.dev
                  </a>
                </li>
                <li>
                  Technical & Development Updates:{" "}
                  <a
                    href="https://medium.com/@ainotfound404321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Medium Blog
                  </a>
                </li>
                <li>
                  Share Your Thoughts:{" "}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeKJnQFfbbqfaaEmm7tOH31qcc4Fj2fG436Afl3vF0EiJmmSA/viewform?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Reflexion Feedback Form
                  </a>
                </li>
              </ul>
              <div className="mt-6 text-right">
                <Button onClick={() => setIsOpen(false)}>Close</Button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
