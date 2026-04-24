module {

  // ── Technique Categories ────────────────────────────────────────────────────

  public type TechniqueCategory = {
    #Pranayama;
    #Mudra;
    #Dhyana;
    #MantraChanting;
    #HerbalRemedies;
    #Sattvavajaya;
  };

  // ── Dosha System (Ayurvedic) ────────────────────────────────────────────────

  public type Dosha = {
    #Vata;
    #Pitta;
    #Kapha;
  };

  // ── Ancient Text Citation ───────────────────────────────────────────────────

  public type TextCitation = {
    textName    : Text;
    chapter     : Text;
    verse       : Text;
    translation : Text;
  };

  // ── Technique ──────────────────────────────────────────────────────────────

  public type Technique = {
    id                     : Text;
    name                   : Text;
    sanskritName           : Text;
    category               : TechniqueCategory;
    shortDescription       : Text;
    longDescription        : Text;
    origin                 : TextCitation;
    steps                  : [Text];
    benefits               : [Text];
    doshasAffected         : [Dosha];
    imageKeyword           : Text;
    relatedTechniqueIds    : [Text];
    duration               : Text;
    difficulty             : Text;
    contraindications      : [Text];
    historicalContext      : Text;
    scientificBacking      : Text;
  };

  // ── Ancient Text Timeline Entry ─────────────────────────────────────────────

  public type AncientText = {
    id           : Text;
    name         : Text;
    sanskritName : Text;
    year         : Text;
    description  : Text;
    teachings    : [Text];
    relevance    : Text;
    authors      : [Text];
  };

  // ── Dosha Detail ────────────────────────────────────────────────────────────

  public type DoshaDetail = {
    name               : Text;
    description        : Text;
    qualities          : [Text];
    imbalanceSymptoms  : [Text];
  };

  // ── Founder Info ────────────────────────────────────────────────────────────

  public type FounderInfo = {
    name            : Text;
    title           : Text;
    bio             : Text;
    credentials     : [Text];
    mission         : Text;
    imageKeyword    : Text;
  };

};
