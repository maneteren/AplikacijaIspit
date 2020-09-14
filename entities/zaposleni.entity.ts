import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Izvestaj } from "./izvestaj.entity";
import { OdjavaZaposleni } from "./odjavaZaposleni.entity";
import { PrijavaZaposleni } from "./prijavaZaposleni.entity";

@Index("id_broj_zaposlenog", ["idBrojZaposlenog"], { unique: true })
@Entity("zaposleni", { schema: "aplikacija" })
export class Zaposleni {
  @PrimaryGeneratedColumn({ type: "int", name: "zaposleni_id", unsigned: true })
  zaposleniId: number;

  @Column("varchar", {
    name: "id_broj_zaposlenog",
    unique: true,
    length: 32,
    default: () => "'0'",
  })
  idBrojZaposlenog: string;

  @Column("varchar", { name: "ime_prezime", length: 64, default: () => "'0'" })
  imePrezime: string;

  @Column("varchar", { name: "pozicija", length: 32, default: () => "'0'" })
  pozicija: string;

  @Column("tinyint", {
    name: "jeste_zaposlen",
    unsigned: true,
    default: () => "'1'",
  })
  jesteZaposlen: number;

  @OneToMany(() => Izvestaj, (izvestaj) => izvestaj.zaposleni)
  izvestajs: Izvestaj[];

  @OneToMany(
    () => OdjavaZaposleni,
    (odjavaZaposleni) => odjavaZaposleni.zaposleni
  )
  odjavaZaposlenis: OdjavaZaposleni[];

  @OneToMany(
    () => PrijavaZaposleni,
    (prijavaZaposleni) => prijavaZaposleni.zaposleni
  )
  prijavaZaposlenis: PrijavaZaposleni[];
}
