import Conclusion from "@/components/Conclusion";
import Contributors from "@/components/Contributors";
import Design from "@/components/Design";
import Functionality from "@/components/Functionality";
import Introduction from "@/components/Introduction";
import Ui from "@/components/Ui";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="pt-24" id="introduction"><Introduction /></div>
      <div className="pt-24" id="design"><Design /></div>
      <div className="pt-24" id="ui"><Ui /></div>
      <div className="pt-24" id="functionality"><Functionality /></div>
      <div className="pt-24" id="conclusion"><Conclusion /></div>
      <div className="pt-24" id="contributors"><Contributors /></div>
    </div>
  );
}
