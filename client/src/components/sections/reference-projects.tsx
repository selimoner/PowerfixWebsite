import { Card, CardContent } from "@/components/ui/card";
import { REFERENCE_PROJECTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ReferenceProjects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-powerfix-dark mb-4">Our Reference Projects</h2>
          <p className="text-xl text-powerfix-gray max-w-2xl mx-auto">
            Trusted by leading construction projects across Rwanda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REFERENCE_PROJECTS.slice(0, 6).map((project) => (
            <Card key={project.id} className="bg-gray-50">
              <CardContent className="p-6">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-powerfix-dark mb-2">{project.name}</h3>
                <p className="text-powerfix-gray">{project.description}</p>
              </CardContent>
              
            </Card>
            
          ))}
        </div>
        <div className="text-center mt-12">
       <Label className="text-lg text-powerfix-dark mb-4">
        And many more...
       </Label>
           
        </div>
      </div>
    </section>
  );
};

export default ReferenceProjects;
