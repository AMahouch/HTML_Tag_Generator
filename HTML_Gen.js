makeTag = function(beginTag, endTag) {
    return function(textcontent) {
        return beginTag +textcontent +endTag;
    }
}

// Creating functions for the table tag, header tag,
// data tag, and row tag. These will be called with
// body text to create HTML
const tableTag = makeTag("<table>", "</table>");
const headerTag = makeTag("<th>", "</th>");
const dataTag = makeTag("<td>", "</td>");
const rowTag = makeTag("<tr>", "</tr>");

// Constructing a row of headers by enclosing each header with
// a <th> tag, then enclosing all of that together with a <tr> tag.
const headers = rowTag("\n" + headerTag("Employee ID") + "\n" + headerTag("Last name") + "\n" + headerTag("DOB") + "\n");

// Similar to above, but these are actual data values. There are 2 rows.
const data1 = rowTag("\n" + dataTag("4883204") + "\n" + dataTag("Mahouch") + "\n" + dataTag("03 March 1949") + "\n");
const data2 = rowTag("\n" + dataTag("8593942") + "\n" + dataTag("Scott") + "\n" + dataTag("14 November 1962") + "\n");

// Enclosing the concatenation of the header and data rows with <table> tags.
const final = tableTag("\n" + headers + "\n" + data1 + "\n" + data2 + "\n");

console.log("\nHTML:\n" + final);