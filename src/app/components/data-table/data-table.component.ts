import { Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: 'data-table.template.html'
})

export class DataTableComponent implements OnChanges {

  headings;

  @Input()
  tableData: any = [
    {
      'Name': 'Aryabhatt',
      'Launch Year': 1975,
      'Launch Vehicle': 'u-11 Interkosmos'
    },
    {
      'Name': 'Bhaskara-I',
      'Launch Year': 1979,
      'Launch Vehicle': 'C-1 Interkosmos'
    },
    {
      'Name': 'Rohini RS-1',
      'Launch Year': 1980,
      'Launch Vehicle': 'SLV-3'
    },
    {
      'Name': 'Rohini RS-D1',
      'Launch Year': 1981,
      'Launch Vehicle': 'SLV-3'
    },
    {
      'Name': 'Bhaskara -II',
      'Launch Year': 1975,
      'Launch Vehicle': 'C-1 Intercosmos'
    },
    {
      'Name': 'INSAT-1A',
      'Launch Year': 1982,
      'Launch Vehicle': 'Delta 3910'
    }
  ];

  ngOnChanges(changes) {
    // Extract headings from Object to be used as table heading
    this.headings = this.tableData && this.tableData[0] && Object.keys(this.tableData[0]);
  }

  // tableData = [
  //   {
  //     ChrStart: "46436004",
  //     Chromosome: "3",
  //     CurrentID: "0",
  //     Description: "lactotransferrin",
  //     GeneWeight: "40713",
  //     GeneticSource: "genomic",
  //     MapLocation: "3p21.31",
  //     Name: "LTF",
  //     NomenclatureName: "lactotransferrin",
  //     NomenclatureStatus: "Official",
  //     NomenclatureSymbol: "LTF",
  //     OtherAliases:"GIG12, HEL110, HLF2, LF",
  //     OtherDesignations: "lactotransferrin|epididymis luminal protein 110|growth-inhibiting protein 12|kaliocin-1|lactoferricin|lactoferroxin|neutrophil lactoferrin|talalactoferrin",
  //     Status: "0",
  //     Summary: "This gene is a member of the transferrin family of genes and its protein product is found in the secondary granules of neutrophils. The protein is a major iron-binding protein in milk and body secretions with an antimicrobial activity, making it an important component of the non-specific immune system. The protein demonstrates a broad spectrum of properties, including regulation of iron homeostasis, host defense against a broad range of microbial infections, anti-inflammatory activity, regulation of cellular growth and differentiation and protection against cancer development and metastasis. Antimicrobial, antiviral, antifungal and antiparasitic activity has been found for this protein and its peptides. Alternatively spliced transcript variants encoding different isoforms have been found for this gene. [provided by RefSeq, Sep 2014]"
  //   }
  // ];
}
