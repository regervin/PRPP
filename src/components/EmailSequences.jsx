import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EmailSequences = ({ onClose }) => {
  const [copiedPrompt, setCopiedPrompt] = useState(null);

  const copyToClipboard = (text, promptId) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(promptId);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const emailSequences = [
    {
      id: 1,
      title: "Welcome Series (7 emails)",
      description: "Nurture new subscribers and build trust",
      value: "$97",
      prompts: [
        {
          id: "welcome-1",
          title: "Email 1: Welcome & Expectation Setting",
          prompt: `Subject: Welcome to [Your Brand] - Here's what to expect!

Hi [First Name],

Welcome to the [Your Brand] family! I'm thrilled you've joined our community of smart shoppers who want honest, detailed product reviews.

Here's what you can expect from me:

✅ Unbiased product reviews (I test everything myself)
✅ Exclusive deals and discounts (subscriber-only)
✅ Weekly roundups of the best products I've found
✅ No spam, ever - just valuable content

Over the next few days, I'll be sharing my top product recommendations that have genuinely improved my life. These aren't random picks - they're products I personally use and love.

Tomorrow, I'll send you my #1 productivity tool that saves me 2+ hours every day.

Talk soon,
[Your Name]

P.S. Hit reply and let me know what type of products you're most interested in learning about!`
        },
        {
          id: "welcome-2", 
          title: "Email 2: Personal Story + First Recommendation",
          prompt: `Subject: The $47 gadget that changed my morning routine

Hi [First Name],

Yesterday I promised to share my #1 productivity tool. But first, let me tell you why I started reviewing products...

Three years ago, I was drowning in online reviews. 5-star ratings that seemed fake, sponsored content disguised as honest reviews, and products that looked amazing but fell apart after a week.

I was tired of wasting money on junk.

So I started testing products myself and sharing what actually worked. No fluff, no fake hype - just honest opinions from someone who's spent their own money.

Today's recommendation: [Product Name]

This little device has transformed my mornings. Here's why:

• [Benefit 1 with specific example]
• [Benefit 2 with specific example]  
• [Benefit 3 with specific example]

I've been using it for 8 months now, and it's still going strong.

The best part? It's only $47 on Amazon right now (normally $67).

[Check it out here: AFFILIATE LINK]

I'll be back tomorrow with another game-changer.

Best,
[Your Name]

P.S. If you grab this, let me know how it works for you!`
        }
      ]
    },
    {
      id: 2,
      title: "Product Launch Sequence (5 emails)",
      description: "Build anticipation and drive sales for new products",
      value: "$67",
      prompts: [
        {
          id: "launch-1",
          title: "Email 1: Teaser - Something Big Coming",
          prompt: `Subject: Something big is coming... (sneak peek inside)

Hi [First Name],

I've been testing something for the past 3 months that I'm genuinely excited to share with you.

Without giving too much away, it's a [product category] that solves [main problem] in a way I've never seen before.

Here's what I can tell you:

🔥 It's launching publicly next Tuesday
🔥 Early bird pricing saves you 40% 
🔥 Only 500 units available in the first batch
🔥 I've negotiated an exclusive bonus for my subscribers

I'll have the full review ready Monday, but I wanted to give you a heads up because this will likely sell out fast.

Keep an eye on your inbox...

[Your Name]

P.S. Here's a sneak peek photo: [IMAGE]`
        }
      ]
    }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-t-lg">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">📧 Email Marketing Sequences</h2>
                <p className="text-green-100 mt-1">Pre-written campaigns that convert ($197 Value)</p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 text-2xl font-bold"
              >
                ×
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid gap-6">
              {emailSequences.map((sequence) => (
                <div key={sequence.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{sequence.title}</h3>
                      <p className="text-gray-600 mt-1">{sequence.description}</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {sequence.value}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {sequence.prompts.map((prompt) => (
                      <div key={prompt.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-medium text-gray-900">{prompt.title}</h4>
                          <button
                            onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                              copiedPrompt === prompt.id
                                ? 'bg-green-100 text-green-800'
                                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                            }`}
                          >
                            {copiedPrompt === prompt.id ? '✓ Copied!' : 'Copy'}
                          </button>
                        </div>
                        <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono bg-white p-3 rounded border">
                          {prompt.prompt}
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">💡 How to Use These Templates:</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• Replace [placeholders] with your specific details</li>
                <li>• Customize the tone to match your brand voice</li>
                <li>• Test different subject lines to improve open rates</li>
                <li>• Track click-through rates and optimize accordingly</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EmailSequences;
