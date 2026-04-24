import Types "../types/techniques-and-content";
import Lib "../lib/techniques-and-content";
import Runtime "mo:core/Runtime";

mixin () {

  public query func getAllTechniques() : async [Types.Technique] {
    Runtime.trap("not implemented");
  };

  public query func getTechniqueById(id : Text) : async ?Types.Technique {
    Runtime.trap("not implemented");
  };

  public query func getTechniquesByCategory(category : Types.TechniqueCategory) : async [Types.Technique] {
    Runtime.trap("not implemented");
  };

  public query func getFounderInfo() : async Types.FounderInfo {
    Runtime.trap("not implemented");
  };

  public query func getAncientTexts() : async [Types.AncientText] {
    Runtime.trap("not implemented");
  };

  public query func getDoshaDetails() : async [Types.DoshaDetail] {
    Runtime.trap("not implemented");
  };

};
