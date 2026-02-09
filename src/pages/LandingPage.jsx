import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Stethoscope, ShieldCheck, Clock, Activity } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <Activity className="h-6 w-6" />
            <span>MedCore</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button onClick={() => navigate('/register')}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-20 bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-900 dark:to-background">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl">
          Modern Healthcare <br className="hidden md:block" />
          <span className="text-blue-600">Simplified.</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          Streamline patient management, appointments, and medical records with our secure and intuitive hospital management system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="px-8" onClick={() => navigate('/register')}>
            Register Now
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose MedCore?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="p-3 bg-blue-100 rounded-full mb-4">
                  <Stethoscope className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Smart Diagnostics</CardTitle>
                <CardDescription>
                  AI-powered tools to assist doctors in faster and more accurate diagnoses.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 2 */}
            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="p-3 bg-green-100 rounded-full mb-4">
                  <ShieldCheck className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Secure Records</CardTitle>
                <CardDescription>
                  Enterprise-grade encryption keeps patient data safe and compliant.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 3 */}
            <Card className="border-none shadow-md">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="p-3 bg-purple-100 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>24/7 Availability</CardTitle>
                <CardDescription>
                  Access records and schedule appointments anytime, from anywhere.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t text-center text-sm text-muted-foreground">
        © 2026 MedCore Hospital Management. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
