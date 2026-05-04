import WPeon from "./WPeon.png";
import BPeon from "./BPeon.png";
import WCaballo from "./WCaballo.png";
import BCaballo from "./BCaballo.png";
import WArfil from "./WArfil.png";
import BArfil from "./BArfil.png";
import WTorre from "./WTorre.png";
import BTorre from "./BTorre.png";
import WReina from "./WReina.png";
import BReina from "./BReina.png";
import WRey from "./WRey.png";
import BRey from "./BRey.png";

export const pieceImagesMap = {
  pawn: { white: WPeon, black: BPeon },
  knight: { white: WCaballo, black: BCaballo },
  bishop: { white: WArfil, black: BArfil },
  rook: { white: WTorre, black: BTorre },
  queen: { white: WReina, black: BReina },
  king: { white: WRey, black: BRey },
};
