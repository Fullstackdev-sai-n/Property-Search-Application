import { PageRouter } from "./page-router/page-router";
import { AboutPage } from "./pages/about-page/about-page";
import { HomePage } from "./pages/home-page/home-page";
import { AdviceCard } from "./components/advice-card/AdviceCard";
import { ExploreCard } from "./components/explore-card/ExploreCard";
import { FeaturedCard } from "./components/featured-card/FeaturedCard";
import { Footer } from "./components/custom-footer/Footer";
import { GalleryCard } from "./components/gallery-card/GalleryCard";
import { GuideCard } from "./components/guide-card/GuideCard";
import { HandpickedProjectCard } from "./components/handpicked-project-card/HandpickedProjectCard";
import { Header } from "./components/custom-header/Header";
import { ImageOverlayTextCard } from "./components/image-overlay-text-card/ImageOverlayCard";
import { OwnerPropertyCard } from "./components/owner-property-card/OwnerPropertyCard";
import { PropertiesListedCard } from "./components/properties-listed-card/PropertiesListedCard";
import { ServicesCard } from "./components/services-card/ServicesCard";
import { ArrowRight } from "./elements/arrow-right/arrowRight";
import { SectionHeading } from "./elements/section-heading/customHeading";
import { SideIconText } from "./elements/custom-button/customButton";
import { ImageOverlayButton } from "./elements/image-overlay-play-button/imageOverlayButton";



// Define all custom elements (components)
customElements.define("page-router", PageRouter);
customElements.define("about-page", AboutPage);
customElements.define("home-page", HomePage);


