import { vyagutaHighlightsPage } from "../pages/vyagutaHighlightsPage";

describe("Vyaguta  highlights test", () => {
  beforeEach(() => {
    vyagutaHighlightsPage.setRefreshToken();
    vyagutaHighlightsPage.visitHighlightsPage();
  });
  it("should open the highlights page", () => {
    vyagutaHighlightsPage.visitHighlightsPage();
  });

  it("should display the release note popup modal and then close it ", () => {
    vyagutaHighlightsPage.closeReleaseNotePopup();
  });
});
