"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { generateCaptcha } from "@/lib/utils/captcha";

interface RegistrationFormProps {
  formData: any;
  setFormData: (data: any) => void;
  captcha: string;
  setCaptcha: (captcha: string) => void;
  errors: Record<string, string>;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export function RegistrationForm({
  formData,
  setFormData,
  captcha,
  setCaptcha,
  errors,
  isSubmitting,
  onSubmit,
}: RegistrationFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className={errors.fullName ? "border-red-500" : ""}
        />
        {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="stateProvince">State/Province</Label>
          <Input
            id="stateProvince"
            value={formData.stateProvince}
            onChange={(e) => setFormData({ ...formData, stateProvince: e.target.value })}
            className={errors.stateProvince ? "border-red-500" : ""}
          />
          {errors.stateProvince && <p className="text-sm text-red-500">{errors.stateProvince}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input
            id="country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className={errors.country ? "border-red-500" : ""}
          />
          {errors.country && <p className="text-sm text-red-500">{errors.country}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="captcha">Captcha: {captcha}</Label>
        <Input
          id="captcha"
          value={formData.captchaInput}
          onChange={(e) => setFormData({ ...formData, captchaInput: e.target.value })}
          className={errors.captcha ? "border-red-500" : ""}
          placeholder="Enter the code above"
        />
        {errors.captcha && <p className="text-sm text-red-500">{errors.captcha}</p>}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setCaptcha(generateCaptcha())}
          className="text-xs"
        >
          Refresh Captcha
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={formData.agreeToTerms}
          onCheckedChange={(checked) => 
            setFormData({ ...formData, agreeToTerms: checked as boolean })
          }
        />
        <label
          htmlFor="terms"
          className={`text-sm ${errors.terms ? "text-red-500" : "text-gray-400"}`}
        >
          I agree to the Terms & Conditions and Privacy Policy
        </label>
      </div>
      {errors.terms && <p className="text-sm text-red-500">{errors.terms}</p>}

      <Button
        type="submit"
        className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Submit"}
      </Button>
    </form>
  );
}