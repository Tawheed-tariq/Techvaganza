import axios from 'axios';
import * as cheerio from 'cheerio';
import { useEffect, useState } from 'react';
import PageLayout from '../../Components/PageLayout'

export default function ScrapeComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://erp.nitsri.ac.in/Academic/Event/iitms59kYF9lC0cj3VbTS6unBiAl+l75Pr6We0g1qjBoOkzq3f3cNp1dZ7YOKj7wb+MDkvhXLxOyJOP47ksp5DwqNGQ==?enc=PGGnKE+FhaAMOfnxe7M9GwBcux5EgVy80ddzKbCB96CaklXmzx13/ewu9lNXat0JzHLB2v648wr0DQ2Jljfxxw==')
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);

        // Parse HTML (similar to BeautifulSoup)
        const filteredRows = [];
        $('tr').each((index, element) => {
          const inputElement = $(element).find('td:nth-child(7) input');
          const id = inputElement.attr('id');
          if (id && ['lvEventReg_ctrl55_btnRegister', 'lvEventReg_ctrl56_btnRegister', 'lvEventReg_ctrl57_btnRegister'].includes(id)) {
            filteredRows.push($(element).html());  // Add the filtered row HTML
          }
        });

        setData(filteredRows);
      })
      .catch(error => console.log('Error fetching data:', error));
  }, []);

  return (
    <PageLayout title={"Event Timings"} imgUrl={"/common/schedule.jpeg"}>
      <div className="px-4 md:px-10 py-4 md:py-10 font-playfair bg-background ShadowLarge">
        <h1>Scraped Data</h1>
        {data ? data.map((row, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: row }} />
        )) : <p>Loading...</p>}
      </div>
    </PageLayout>
  );
};

