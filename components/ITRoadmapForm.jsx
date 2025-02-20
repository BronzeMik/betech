"use client";

import { Suspense, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectItem, SelectContent, SelectGroup, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from "axios";
import { useParams, usePathname } from "next/navigation";




export default function ITRoadmapForm({steps, step, setStep, formData, setFormData, searchParams}) {
  
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState(null);
  const verificationToken = searchParams.get("verification");
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


    if(formData.companyName.length <= 0 || formData.itGoals <= 0 || formData.industry.length <= 0 || formData.challenges.length <= 0
    || formData.cloudPreference.length <= 0 || formData.securityPriority.length <= 0 || formData.companySize.length <= 0) {
      alert("Please fill all the fields before generating the roadmap.");
        setLoading(false);
        return;
    } 

    try {
        
      const response = await axios.post("/api/generate-it-roadmap", { formData, verificationToken });
      if(!response?.data?.roadmap && response?.data?.message === "A lead magnet was already generated in the last 48 hours.") {
        alert("A lead magnet was already generated in the last 48 hours. Please check your email for the link to download it.");
        setLoading(false);
        return;
      }
      setRoadmap(response.data.roadmap);
      console.log(roadmap);
    } catch (error) {
      console.error("Error generating roadmap", error);
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () =>
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    
    <div className="mx-auto p-6 bg-gray-50/20 border-2 border-gray-100 flex flex-col justify-between rounded-xl shadow-lg w-full md:h-[400px]">
      <h2 className="text-2xl font-bold mb-4 text-[#2f2f2f]">{steps[step]}</h2>
      <Progress
        value={(step / (steps.length - 1)) * 100}
        className="mb-4 bg-white border-2 border-gray-200"
      />

      {step === 0 && (
        <div className="space-y-4">
          <Input
            name="companyName"
            placeholder="Company Name"
            onChange={handleChange}
            value={formData.companyName}
          />
          <Select
            name="companySize"
            onValueChange={(value) =>
              setFormData({ ...formData, companySize: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="What is your company size" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                <SelectItem value="small">Small (11-50 employees)</SelectItem>
                <SelectItem value="medium">
                  Medium (51-500 employees)
                </SelectItem>
                <SelectItem value="large">Large (500+ employees)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            name="industry"
            placeholder="Industry"
            onChange={handleChange}
            value={formData.industry}
          />
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <Input
            name="itGoals"
            placeholder="Your IT Goals"
            onChange={handleChange}
            value={formData.itGoals}
          />
          <Input
            name="challenges"
            placeholder="Biggest Challenges"
            onChange={handleChange}
            value={formData.challenges}
          />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <Select
            name="cloudPreference"
            onValueChange={(value) =>
              setFormData({ ...formData, cloudPreference: value })
            }
            >
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Which cloud do your prefer to use?" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
              <SelectItem value="aws">AWS</SelectItem>
              <SelectItem value="azure">Azure</SelectItem>
              <SelectItem value="gcp">Google Cloud</SelectItem>
              <SelectItem value="unsure">Unsure</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select
            name="securityPriority"
            onValueChange={(value) =>
              setFormData({ ...formData, securityPriority: value })
            }
            
            >
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="What is your security priority?" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
              <SelectItem value="high">High Priority</SelectItem>
              <SelectItem value="medium">Medium Priority</SelectItem>
              <SelectItem value="low">Low Priority</SelectItem>
              <SelectItem value="unsure">Unsure</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-2 text-[#141122] text-left w-full">
          <p>
            <strong>Company:</strong> {formData.companyName} (
            {formData.companySize})
          </p>
          <p>
            <strong>Industry:</strong> {formData.industry}
          </p>
          <p>
            <strong>IT Goals:</strong> {formData.itGoals}
          </p>
          <p>
            <strong>Challenges:</strong> {formData.challenges}
          </p>
          <p>
            <strong>Cloud Preference:</strong> {formData.cloudPreference}
          </p>
          <p>
            <strong>Security Priority:</strong> {formData.securityPriority}
          </p>
        </div>
      )}

      <div className="flex justify-between mt-6">
        {step > 0 && <Button onClick={prevStep} disabled={roadmap || loading}>Back</Button>}
        {step < steps.length - 1 ? (
          <Button
            className="text-white bg-[#3fa885] hover:bg-[#141122]"
            onClick={nextStep}
          >
            Next
          </Button>
        ) : (
          <>
          {!roadmap ? (<Button className="bg-[#3fa885] w-fit text-[#141122] hover:text-white" onClick={handleSubmit}>
            {/* Submit */}
            {loading ? (
              <div className="flex items-center justify-center gap-3" disabled={loading}><p>Please wait this could take up to 2 minutes.</p><span className="loader w-[20px] h-[20px]"></span></div>
            ) : (
              <span>Generate IT Roadmap</span>
            )}
          </Button>) : (
            <a href={`${roadmap}`} target='_blank'>
            <Button className="bg-[#3fa885] w-fit text-[#141122] hover:text-white">
                Download Your IT Roadmap!
            </Button>
            </a>

          )}
          </>
        )}
      </div>
    </div>
  );
}
