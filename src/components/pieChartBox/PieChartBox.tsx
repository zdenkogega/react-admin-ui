import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

const data = [
  { name: "Mobile", value: 400, color: "#8884d8" },
  { name: "Desktop", value: 300, color: "#83a6ed" },
  { name: "Laptop", value: 300, color: "#83a6ed" },
  { name: "Tablet", value: 200, color: "#8dd1e1" },
];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Lead by Source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option">
            <div className="title">
              <div className="dot" style={{ background: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
