import ParticlesComponent from "../heroConfig/particles_Config";
import "./hero.css";

export default function Hero() {
  return (
    <div className="flex items-center justify-center pt-40">
      <div className="p-4">
        <h1 className="heading font-bold text-center">
          <span>Tech For Tomorrow</span>
          <span className="2"> Actions for Today</span>
        </h1>
      </div>
    </div>
  );
}
