interface SeaportCardProps {
  name: string;
  region: string;
  era: string;
  description: string;
  goods: string[];
  icon: string;
}

export function SeaportCard({ name, region, era, description, goods, icon }: SeaportCardProps) {
  return (
    <div className="ancient-card">
      <div className="ancient-card-icon">{icon}</div>
      
      <h3 className="ancient-card-title">{name}</h3>
      
      <div className="flex gap-2 mb-3 flex-wrap">
        <span className="ancient-badge">{region}</span>
        <span className="ancient-card-subtitle text-sm">{era}</span>
      </div>
      
      <p className="text-sm leading-relaxed mb-4 text-gray-800">
        {description}
      </p>
      
      <div className="ancient-divider"></div>
      
      <div>
        <h4 className="font-bold text-sm mb-2 text-amber-900">Principal Exports:</h4>
        <div className="flex flex-wrap gap-2">
          {goods.map((good, index) => (
            <span key={index} className="goods-tag">
              {good}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
