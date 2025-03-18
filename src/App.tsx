import { Button } from "@/components/ui/button";
import { RocketIcon, CloudIcon, GaugeIcon, LockIcon, CodeIcon } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to My GCP App Engine Deployment
        </h1>
        <p className="text-xl text-muted-foreground">
          This React application was created by Viraj Mandlik and is successfully deployed on Google Cloud Platform's App Engine.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="p-6 rounded-lg border bg-card">
            <div className="flex items-center gap-2 mb-4">
              <RocketIcon className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Easy Deployment</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Deploy with a simple 'gcloud app deploy' command. App Engine automatically handles scaling, patching, and server management.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border bg-card">
            <div className="flex items-center gap-2 mb-4">
              <CloudIcon className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Automatic Scaling</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              App Engine automatically scales your application in response to traffic. Handles thousands of requests per second with ease.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border bg-card">
            <div className="flex items-center gap-2 mb-4">
              <GaugeIcon className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Performance Monitoring</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Built-in monitoring, logging, and diagnostics. Cloud Monitoring and Cloud Logging integration for detailed insights.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border bg-card">
            <div className="flex items-center gap-2 mb-4">
              <LockIcon className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Security & Compliance</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Managed SSL/TLS certificates, security scanning, and IAM integration for robust security controls.
            </p>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <p className="text-lg flex items-center justify-center gap-2">
            <CodeIcon className="w-5 h-5" />
            Built with:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant="outline">React</Button>
            <Button variant="outline">TypeScript</Button>
            <Button variant="outline">Vite</Button>
            <Button variant="outline">Shadcn UI</Button>
            <Button variant="outline">Tailwind CSS</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;