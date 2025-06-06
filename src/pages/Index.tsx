import React from 'react';
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Clock, Coffee, Flag } from "lucide-react";

const Index = () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSecb0IwhcZprKZiDBZzYkZLTNSE4hMKzqsSXQzzEbYGR_--HA/viewform?usp=sharing";
  return <div className="min-h-screen bg-black font-sans">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-black flex items-center justify-center">
        {/* Background image */}
        <img src="/lovable-uploads/c50de547-acb6-4fa8-bccd-30b8fbc51d35.png" alt="Pathways Tournament Banner" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        <div className="relative z-10 text-white px-4 w-full bg-black">
          <div className="max-w-4xl mx-auto text-center"> {/* Changed text-left to text-center */}
            <div className="mb-8 h-[70vh] flex flex-col justify-center items-center bg-black pt-20"> {/* Changed items-start to items-center */}
              <img src="/lovable-uploads/c50de547-acb6-4fa8-bccd-30b8fbc51d35.png" alt="Pathways Tournament Banner" className="max-w-full max-h-full object-contain mx-auto" /> {/* Added mx-auto to center */}
              <div className="text-center w-full"> {/* Changed text-left to text-center */}
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 bg-black text-white">
        <div className="mb-8">
          <div className="text-left mb-4">
            <h2 className="font-bold mb-2 text-left text-3xl truncate whitespace-nowrap">
              The Pathways Tournament 2025 Kicks Off Across 4 Nations!
            </h2>
            <div className="flex items-center space-x-4 text-lg mb-4">
              <span className="text-left">Sport.</span>
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-left">Purpose.</span>
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-left">Opportunity.</span>
            </div>
          </div>

          <div className="flex items-center text-gray-300 mb-4 text-left"> {/* Changed text-center to text-left */}
            <span>3 minute read</span>
            <span className="mx-2">•</span>
            <span>Written by Pathways Project</span>
          </div>
          
          <p className="text-xl mb-8 text-left">
            The Pathways Project and New Balance present the Pathways Tournament 2025 — a powerful fusion of football, culture, and career opportunity.
          </p>
          
          <p className="text-lg mb-8 text-left">
            Hosted across Manchester, Cologne, Amsterdam, and Accra, this unique event brings together players, creatives, and recruiters for a full day of football, networking, and next-step discovery.
          </p>
        </div>

        {/* What to Expect Section */}
        <div className="space-y-12 mb-12">
          <section>
            <h2 className="font-bold mb-4 flex items-center text-xl truncate whitespace-nowrap">
              ⚽ What to Expect
            </h2>
            <p className="text-lg">
              This isn't just a tournament — it's a full cultural moment. Each team features an influencer or cultural personality playing alongside the squad, bringing extra energy to the pitch.
            </p>
          </section>

          <section>
            <h2 className="font-bold mb-4 text-xl truncate whitespace-nowrap">
              🎶 Off the Pitch
            </h2>
            <p className="text-lg">
              🎧 Vibes all day with live DJs, 🍕 great food, 🥤 drinks, 🎁 exclusive giveaways, and 🎪 immersive brand activations.
            </p>
          </section>

          {/* Career Stalls Section */}
          <section>
            <h2 className="font-bold mb-4 text-xl truncate whitespace-nowrap">
              💼 Career Stalls – Real Access, Real Connections
            </h2>
            <p className="text-lg mb-4 py-0 my-[3px]">
              Top companies will be onsite to meet players and attendees, offering advice, insights, and opportunities.
            </p>
            
            <h2 className="text-xl font-bold mt-4 mb-2 truncate whitespace-nowrap">🏢 Participants include:</h2>
            <p className="text-lg">
              New Balance, Bransmiths Sports Lawyers, Daily Paper, ESPN, 433, UCFB, Tenzing, Double Tap — and many more.
            </p>
          </section>
        </div>

        {/* Event Details */}
        <div className="bg-gray-900 p-6 rounded-lg space-y-4">
          <div className="flex items-center gap-3">
            <span>📌</span>
            <div>
              <h3 className="font-bold">Locations:</h3>
              <ul className="list-disc list-inside ml-4">
                <li>🇩🇪 Germany: Strassenkicker Base, Cologne - Saturday 14th June</li>
                <li>🇳🇱 Netherlands: Sportpark FC Amsterdam - Sunday 15th June</li>
                <li>🇬🇧 UK: Powerleague Nicholls, Manchester - Sunday 22nd June</li>
                <li>🇬🇭 Ghana: AIS Sportcomplex, Accra - Saturday 28th June</li>
              </ul>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span>⏰</span>
            <span>Time: 12PM – 6PM</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span>🍔</span>
            <span>Free food and drinks all day</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span>👟</span>
            <span>Free New Balance Gear</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-xl mb-8">
            This is more than a tournament. It's a pathway to what's next. Come for the football, leave with a future.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            
            <Button size="lg" variant="outline" onClick={() => window.open(formUrl, '_blank')} className="border-white text-stone-950">Player Sign Up</Button>
            <Button size="lg" variant="outline" onClick={() => window.open(formUrl, '_blank')} className="border-white text-stone-950">Influencer Sign Up</Button>
          </div>
          <div className="mt-8 text-gray-400">
            @joinpathways | @newbalancefootball
          </div>
        </div>
      </div>
    </div>;
};

export default Index;
