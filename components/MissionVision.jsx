
import { Card } from "primereact/card";

const MissionVision = () => {
    return (
      <div className="p-grid p-justify-center p-mt-5">
        <div className="p-col-12 p-md-6">
          <Card
            title="Our Mission"
            className="p-shadow-5"
            style={{ borderLeft: '5px solid #21FA90' }}
          >
            <p>
              At BeTech, our mission is to deliver innovative IT solutions that
              empower businesses to achieve their full potential in the digital
              landscape.
            </p>
          </Card>
        </div>
        <div className="p-col-12 p-md-6">
          <Card
            title="Our Vision"
            className="p-shadow-5"
            style={{ borderLeft: '5px solid #2E294E' }}
          >
            <p>
              We envision a future where technology and creativity converge to
              drive unprecedented growth and success for our clients worldwide.
            </p>
          </Card>
        </div>
      </div>
    );
  };
  
  export default MissionVision;
  