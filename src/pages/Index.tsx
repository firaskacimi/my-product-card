import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Name from '../components/Name';
import Price from '../components/Price';
import Description from '../components/Description';
import Image from '../components/Image';
import headphonesImg from '../assets/headphones.jpg';
import profileImg from '../assets/profile.jpg';

// You can change this to your first name!
const firstName = "Alex";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Product Showcase
          </h1>
          <p className="text-xl text-muted-foreground">
            Premium audio products for audiophiles
          </p>
        </div>

        {/* Product Card */}
        <Card className="bg-gradient-card border-secondary/20 shadow-card backdrop-blur-sm overflow-hidden max-w-2xl mx-auto mb-12">
          <CardHeader className="pb-4">
            <div className="flex justify-center">
              <div className="w-full">
                <img 
                  src={headphonesImg} 
                  alt="Aurora Wireless Headphones"
                  className="w-full h-80 object-cover rounded-lg shadow-glow"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Name />
            <Price />
            <Description />
            <div className="flex gap-3 pt-4">
              <Button className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Add to Cart
              </Button>
              <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Greeting Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-card p-6 rounded-2xl shadow-card border border-secondary/20">
            <div className="text-2xl font-bold text-foreground">
              {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
            </div>
            {firstName && (
              <img 
                src={profileImg} 
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-glow"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
