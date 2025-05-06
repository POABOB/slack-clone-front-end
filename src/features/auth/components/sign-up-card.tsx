import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignInFlow } from "../types";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>註冊</CardTitle>
        <CardDescription>使用您的 Email 或第三方帳號登入</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input  
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="Email"
            type="email"
            required
          />
          <Input  
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="密碼"
            type="password"
            required
          />
          <Input  
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="密碼確認"
            type="password" 
            required
          />
          <Button type="submit" className="w-full" size="lg" disabled={false}>
            提交
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button 
            disabled={false}
            onClick={() => {}}
            variant="outline" 
            size="lg" 
            className="w-full relative" 
          >
            <FcGoogle className="size-5 absolute left-2.5 top-2.5" />
            使用 Google 登入
          </Button>
          <Button 
            disabled={false}
            onClick={() => {}}
            variant="outline" 
            size="lg" 
            className="w-full relative" 
          >
            <FaGithub className="size-5 absolute left-2.5 top-2.5" />
            使用 GitHub 登入
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          已經有帳號了？ 
          <span 
            onClick={() => setState("signIn")} 
            className="text-sky-700 hover:underline cursor-pointer"
          >
            登入
          </span>
        </p>
      </CardContent>
    </Card>
  );
};

