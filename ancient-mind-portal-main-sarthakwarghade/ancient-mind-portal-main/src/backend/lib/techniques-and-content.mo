import Types "../types/techniques-and-content";
import Runtime "mo:core/Runtime";

module {

  public func getAllTechniques() : [Types.Technique] {
    Runtime.trap("not implemented");
  };

  public func getTechniqueById(id : Text) : ?Types.Technique {
    Runtime.trap("not implemented");
  };

  public func getTechniquesByCategory(category : Types.TechniqueCategory) : [Types.Technique] {
    Runtime.trap("not implemented");
  };

  public func getFounderInfo() : Types.FounderInfo {
    Runtime.trap("not implemented");
  };

  public func getAncientTexts() : [Types.AncientText] {
    Runtime.trap("not implemented");
  };

  public func getDoshaDetails() : [Types.DoshaDetail] {
    Runtime.trap("not implemented");
  };

};
