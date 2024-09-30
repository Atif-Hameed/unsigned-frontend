import shirt from '/public/orders/t-shirt.png';
import hoodie from '/public/orders/hoodie new.png';
import crew from '/public/orders/crew new.png';
import zip from '/public/orders/zip new.png';
import long from '/public/orders/longsleeve new.png';
import tank from '/public/orders/Tank Top Sizing Picture.png';
import jogger_open_leg from '/public/orders/Jogger Cuffed Sizing Picture.png';
import jogger_cuffed from '/public/orders/Jogger Open Leg Sizing Picture.png';
import short from '/public/orders/Shorts Sizing Picture.png';

export const OrdersData = [
    {
        category: "t-shirt",
        fitImg: shirt,
        fitOptions: [
            { label: 'Boxy fit', value: 'boxy_fit' },
        ],
        fitData: [
            { name: 'Total Length', xs: '65', s: '67', m: '69', l: '71', xl: '73', xxl: '75' },
            { name: 'Chest Width', xs: '58', s: '59', m: '60', l: '61', xl: '62', xxl: '63' },
            { name: 'Bottom Width', xs: '58', s: '59', m: '60', l: '61', xl: '62', xxl: '63' },
            { name: 'Neck Opening', xs: '20', s: '20', m: '20', l: '20', xl: '20', xxl: '20' },
            { name: 'Armhole', xs: '24', s: '24.5', m: '25', l: '25.5', xl: '26', xxl: '26.5' },
            { name: 'Sleeve Opening', xs: '21', s: '21.5', m: '22', l: '22.5', xl: '23', xxl: '23.5' },
            { name: 'Sleeve Length', xs: '20', s: '21', m: '22', l: '23', xl: '24', xxl: '25' },
            { name: 'Shoulder to Neck', xs: '17', s: '18', m: '19', l: '20', xl: '21', xxl: '22' },
            { name: 'Neck Rib Length', xs: '2', s: '2', m: '2', l: '2', xl: '2', xxl: '2' },
            { name: 'Neck Drop Front', xs: '10', s: '10', m: '10', l: '10', xl: '10', xxl: '10' },
            { name: 'Shoulder to Shoulder', xs: '58', s: '59', m: '60', l: '61', xl: '62', xxl: '63' }
        ]
    }
    , {
        category: "hoodie",
        fitImg: hoodie,
        fitOptions: [
            { label: 'Boxy fit', value: 'boxy_fit' },
            { label: 'Balloon Fit', value: 'balloon_fit' },

        ],
        fitData: [
            { name: 'Total Length', xs: '60', s: '62', m: '64', l: '66', xl: '68', xxl: '70' },
            { name: 'Chest Width', xs: '64', s: '66', m: '68', l: '70', xl: '72', xxl: '74' },
            { name: 'Bottom Width', xs: '55', s: '56', m: '57', l: '59', xl: '61', xxl: '62' },
            { name: 'Shoulder to Shoulder', xs: '76', s: '78', m: '80', l: '82', xl: '84', xxl: '86' },
            { name: 'Shoulder to Neck', xs: '22', s: '23', m: '24', l: '25', xl: '26', xxl: '27' },
            { name: 'Sleeve Length', xs: '51.5', s: '53', m: '54.5', l: '56', xl: '57.5', xxl: '59' },
            { name: 'Cuff Width', xs: '9.5', s: '10', m: '10.5', l: '11', xl: '11.5', xxl: '12' },
            { name: 'Cuff Length', xs: '6', s: '6', m: '6', l: '6', xl: '6', xxl: '6' },
            { name: 'Hem Length', xs: '6', s: '6', m: '6', l: '6', xl: '6', xxl: '6' },
            { name: 'Pockets Bottom to Zipper', xs: '20', s: '20', m: '21', l: '21', xl: '21', xxl: '21' },
            { name: 'Pockets Bottom Length', xs: '5', s: '5', m: '5', l: '5', xl: '5', xxl: '5' },
            { name: 'Biceps', xs: '26', s: '27', m: '28', l: '29', xl: '30', xxl: '31' },
            { name: 'Sleeve Bottom Length', xs: '9', s: '9.5', m: '10', l: '10.5', xl: '11', xxl: '11.5' },
            { name: 'Hood Width', xs: '27', s: '28', m: '29', l: '30', xl: '31', xxl: '32' },
            { name: 'Hood Length', xs: '38', s: '39', m: '40', l: '41', xl: '42', xxl: '43' },
            { name: 'Neck Opening', xs: '20', s: '20', m: '20', l: '20', xl: '20', xxl: '20' },
            { name: 'Armhole', xs: '24', s: '24.5', m: '25', l: '25.5', xl: '26', xxl: '26.5' },
            { name: 'Sleeve Opening', xs: '21', s: '21.5', m: '22', l: '22.5', xl: '23', xxl: '23.5' },
            { name: 'Neck Rib Length', xs: '2', s: '2', m: '2', l: '2', xl: '2', xxl: '2' },
            { name: 'Neck Drop Front', xs: '10', s: '10', m: '10', l: '10', xl: '10', xxl: '10' }
        ]
    }, {
        category: "crewneck",
        fitImg: crew, // Assuming 'shirt' is the image source
        fitOptions: [
            { label: 'Boxy fit', value: 'boxy_fit' },
            // { label: 'Balloon Fit', value: 'balloon_fit' },
        ],
        fitData: [
            { name: 'Chest Width', xs: '64', s: '66', m: '68', l: '70', xl: '72', xxl: '74' },
            { name: 'Total Length', xs: '60', s: '62', m: '64', l: '66', xl: '68', xxl: '70' },
            { name: 'Bottom Width', xs: '58', s: '59', m: '60', l: '61', xl: '62', xxl: '63' },
            { name: 'Sleeve Opening', xs: '11.5', s: '12', m: '12.5', l: '13', xl: '13.5', xxl: '14' },
            { name: 'Rib Length', xs: '5', s: '5', m: '5', l: '5', xl: '5', xxl: '5' },
            { name: 'Sleeve Length', xs: '51.5', s: '53', m: '54.5', l: '56', xl: '57.5', xxl: '59' },
            { name: 'Shoulder to Neck', xs: '17', s: '18', m: '19', l: '20', xl: '21', xxl: '22' },
            { name: 'Rib Length Sleeves', xs: '5', s: '5', m: '5', l: '5', xl: '5', xxl: '5' },
            { name: 'Rib Length Neck', xs: '2', s: '2', m: '2', l: '2', xl: '2', xxl: '2' },
            { name: 'Neck Opening', xs: '19', s: '19', m: '19', l: '19', xl: '19', xxl: '19' },
            { name: 'Shoulder to Shoulder', xs: '63', s: '64', m: '65', l: '66', xl: '67', xxl: '68' },
            { name: 'Armhole', xs: '30', s: '30.5', m: '31', l: '31.5', xl: '32', xxl: '32.5' }
        ]
    },
    {
        category: "zip-hoodie",
        fitImg: zip, // Assuming 'hoodie' is the image source
        fitOptions: [
            { label: 'Boxy fit', value: 'boxy_fit' },
            // { label: 'Balloon Fit', value: 'balloon_fit' },
        ],
        fitData: [
            { name: 'Total Length', xs: '60', s: '62', m: '64', l: '66', xl: '68', xxl: '70' },
            { name: 'Chest Width', xs: '64', s: '66', m: '68', l: '70', xl: '72', xxl: '74' },
            { name: 'Bottom Width', xs: '55', s: '56', m: '57', l: '59', xl: '61', xxl: '62' },
            { name: 'Shoulder to Shoulder', xs: '76', s: '78', m: '80', l: '82', xl: '84', xxl: '86' },
            { name: 'Shoulder to Neck', xs: '22', s: '23', m: '24', l: '25', xl: '26', xxl: '27' },
            { name: 'Sleeve Length', xs: '51.5', s: '53', m: '54.5', l: '56', xl: '57.5', xxl: '59' },
            { name: 'Cuff Width', xs: '9.5', s: '10', m: '10.5', l: '11', xl: '11.5', xxl: '12' },
            { name: 'Cuff Length', xs: '6', s: '6', m: '6', l: '6', xl: '6', xxl: '6' },
            { name: 'Hem Length', xs: '6', s: '6', m: '6', l: '6', xl: '6', xxl: '6' },
            { name: 'Pockets Bottom to Zipper', xs: '20', s: '20', m: '21', l: '21', xl: '21', xxl: '21' },
            { name: 'Pockets Bottom Length', xs: '5', s: '5', m: '5', l: '5', xl: '5', xxl: '5' },
            { name: 'Biceps', xs: '26', s: '27', m: '28', l: '29', xl: '30', xxl: '31' },
            { name: 'Sleeve Bottom Length', xs: '9', s: '9.5', m: '10', l: '10.5', xl: '11', xxl: '11.5' },
            { name: 'Hood Width', xs: '27', s: '28', m: '29', l: '30', xl: '31', xxl: '32' },
            { name: 'Pockets Top to Zipper', xs: '13.5', s: '13.5', m: '14', l: '14', xl: '14', xxl: '14' },
            { name: 'Hood Length', xs: '38', s: '39', m: '40', l: '41', xl: '42', xxl: '43' }
        ]
    },
    {
        category: "long-sleeve",
        fitImg: long, // Assuming 'tShirt' is the image source
        fitOptions: [
            { label: 'Boxy fit', value: 'boxy_fit' },

        ],
        fitData: [
            { name: 'Chest Width', xs: '58', s: '59', m: '60', l: '61', xl: '62', xxl: '63' },
            { name: 'Total Width', xs: '65', s: '67', m: '69', l: '71', xl: '73', xxl: '75' },
            { name: 'Bottom Width', xs: '58', s: '59', m: '60', l: '61', xl: '62', xxl: '63' },
            { name: 'Bottom Rib', xs: '1.5', s: '1.5', m: '1.5', l: '1.5', xl: '1.5', xxl: '1.5' },
            { name: 'Sleeve Length', xs: '53', s: '55', m: '57', l: '59', xl: '61', xxl: '66' },
            { name: 'Shoulder to Neck', xs: '17', s: '18', m: '19', l: '20', xl: '21', xxl: '22' },
            { name: 'Sleeve Opening', xs: '21', s: '21.5', m: '22', l: '22.5', xl: '23', xxl: '23.5' },
            { name: 'Armhole', xs: '26', s: '26.5', m: '27', l: '27.5', xl: '28', xxl: '28.5' },
            { name: 'Neck Rib Length', xs: '2', s: '2', m: '2', l: '2', xl: '2', xxl: '2' },
            { name: 'Neck Drop Front', xs: '10', s: '10', m: '10', l: '10', xl: '10', xxl: '10' },
            { name: 'Neck Opening', xs: '20', s: '20', m: '20', l: '20', xl: '20', xxl: '20' },
            { name: 'Shoulder to Shoulder', xs: '58', s: '59', m: '60', l: '61', xl: '62', xxl: '63' }
        ]
    },
    {
        category: "tank-top",
        fitImg: tank, // Assuming 'tankTop' is the image source
        fitOptions: [
            { label: 'Regular Fit', value: 'regular_fit' },
            { label: 'Tight Fit', value: 'tight_fit' }
        ],
        fitData: [
            { name: 'Chest Width', xs: '42', s: '44', m: '46', l: '48', xl: '50' },
            { name: 'Total Length', xs: '56', s: '59', m: '62', l: '65', xl: '68' },
            { name: 'Bottom Width', xs: '44', s: '46', m: '48', l: '50', xl: '52' },
            { name: 'Side Length', xs: '32', s: '34', m: '36', l: '38', xl: '40' },
            { name: 'Neck Drop Front', xs: '10', s: '10', m: '10', l: '10', xl: '10' },
            { name: 'Strap', xs: '5', s: '5', m: '5', l: '5', xl: '5' },
            { name: 'Armhole', xs: '22', s: '23', m: '24', l: '25', xl: '26' },
            { name: 'Neck Opening', xs: '18', s: '18', m: '18', l: '18', xl: '18' }
        ],
        // tight_fit: [
        //     { name: 'Chest Width', xs: '32', s: '34', m: '36', l: '38', xl: '40' },
        //     { name: 'Total Length', xs: '49', s: '52', m: '55', l: '58', xl: '61' },
        //     { name: 'Bottom Width', xs: '33', s: '35', m: '37', l: '39', xl: '41' },
        //     { name: 'Side Length', xs: '32', s: '34', m: '36', l: '38', xl: '40' },
        //     { name: 'Neck Drop Front', xs: '10', s: '10', m: '10', l: '10', xl: '10' },
        //     { name: 'Strap', xs: '5', s: '5', m: '5', l: '5', xl: '5' },
        //     { name: 'Armhole', xs: '18', s: '19', m: '20', l: '21', xl: '22' },
        //     { name: 'Neck Opening', xs: '18', s: '18', m: '18', l: '18', xl: '18' }
        // ]

    },
    {
        category: "jogger-open-leg",
        fitImg: jogger_cuffed, // Assuming 'tShirt' is the image source
        fitOptions: [
            { label: 'Baggy fit', value: 'baggy_fit' },],
        fitData: [
            { name: 'Waistband', xs: '30', s: '33', m: '36', l: '39', xl: '41', xxl: '44' },
            { name: 'Leg Length', xs: '94', s: '97', m: '100', l: '103', xl: '106', xxl: '109' },
            { name: 'Crotch Front', xs: '31', s: '31', m: '31', l: '31', xl: '31', xxl: '31' },
            { name: 'Crotch to Bottom', xs: '63', s: '66', m: '69', l: '72', xl: '75', xxl: '78' },
            { name: 'Leg Opening', xs: '10.5', s: '11', m: '11.5', l: '12', xl: '12.5', xxl: '13' },
            { name: 'Crotch Back', xs: '35', s: '35', m: '35', l: '35', xl: '35', xxl: '35' },
            { name: 'Thigh Width', xs: '33', s: '35', m: '37', l: '39', xl: '41', xxl: '43' },
            { name: 'Pocket Back Width', xs: '10', s: '10', m: '10', l: '10', xl: '10', xxl: '10' },
            { name: 'Pocket Back Length', xs: '13', s: '13', m: '13', l: '13', xl: '13', xxl: '13' },
            { name: 'Waist Rib', xs: '4', s: '4', m: '4', l: '4', xl: '4', xxl: '4' },
            { name: 'Pocket Front Length', xs: '14', s: '14', m: '14', l: '14', xl: '14', xxl: '14' }
        ]
    },
    {
        category: "jogger-cuffed",
        fitImg: jogger_open_leg, // Assuming 'tShirt' is the image source
        fitOptions: [
            { label: 'Baggy fit', value: 'baggy_fit' },],
        fitData: [
            { name: 'Waistband', xs: '30', s: '33', m: '36', l: '39', xl: '41', xxl: '44' },
            { name: 'Leg Length', xs: '94', s: '97', m: '100', l: '103', xl: '106', xxl: '109' },
            { name: 'Crotch Front', xs: '31', s: '31', m: '31', l: '31', xl: '31', xxl: '31' },
            { name: 'Crotch to Bottom', xs: '63', s: '66', m: '69', l: '72', xl: '75', xxl: '78' },
            { name: 'Leg Opening', xs: '23', s: '24', m: '25', l: '26', xl: '27', xxl: '28' },
            { name: 'Crotch Back', xs: '35', s: '35', m: '35', l: '35', xl: '35', xxl: '35' },
            { name: 'Thigh Width', xs: '33', s: '35', m: '37', l: '39', xl: '41', xxl: '43' },
            { name: 'Pocket Back Width', xs: '10', s: '10', m: '10', l: '10', xl: '10', xxl: '10' },
            { name: 'Pocket Back Length', xs: '13', s: '13', m: '13', l: '13', xl: '13', xxl: '13' },
            { name: 'Waist Rib', xs: '4', s: '4', m: '4', l: '4', xl: '4', xxl: '4' },
            { name: 'Pocket Front Length', xs: '14', s: '14', m: '14', l: '14', xl: '14', xxl: '14' }
        ]
    },
    {
        category: "shorts",
        fitImg: short, // Assuming 'tShirt' is the image source
        fitOptions: [
            { label: 'Baggy fit', value: 'baggy_fit' },],
        fitData: [
            { name: 'Leg Length', xs: '44', s: '44', m: '47', l: '50', xl: '53', xxl: '56' },
            { name: 'Crotch Front', xs: '33', s: '33', m: '33', l: '33', xl: '33', xxl: '33' },
            { name: 'Crotch to Bottom', xs: '11', s: '11', m: '14', l: '17', xl: '20', xxl: '23' },
            { name: 'Leg Opening', xs: '23', s: '24', m: '25', l: '26', xl: '27', xxl: '28' },
            { name: 'Waistband', xs: '30', s: '33', m: '36', l: '39', xl: '41', xxl: '44' },
            { name: 'Pocket Front Length', xs: '14', s: '14', m: '14', l: '14', xl: '14', xxl: '14' },
            { name: 'Waist Rib', xs: '4', s: '4', m: '4', l: '4', xl: '4', xxl: '4' },
            { name: 'Crotch Back', xs: '37', s: '37', m: '37', l: '37', xl: '37', xxl: '37' },
            { name: 'Pocket Back Width', xs: '10', s: '10', m: '10', l: '10', xl: '10', xxl: '10' },
            { name: 'Pocket Back Length', xs: '13', s: '13', m: '13', l: '13', xl: '13', xxl: '13' }
        ]
    }

];
