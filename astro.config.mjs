import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import starlightThemeRapide from 'starlight-theme-rapide'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  integrations: [
    starlight({
      expressiveCode: {
  themes: ['github-dark', 'github-light'],
},
       plugins: [starlightThemeRapide()],
       customCss: ['./src/styles/global.css'],
      title: "Let's Get Placed - 2027",
      description: "Structured preparation for placements",
      head: [
  {
    tag: 'link',
    attrs: { rel: 'icon', href: '/favicon.png' },
  },
  {
    tag: 'link',
    attrs: { rel: 'shortcut icon', href: '/favicon.png' },
  },
],

      sidebar: [
        {
          label: "Introduction",
          collapsed: false,
          items: [{ label: "Overview", link: "/" }],
        },

        {
          label: "Aptitude",
          collapsed: true,
          items: [
            {
              label: "Week 1",
              collapsed: true,
              items: [
                { label: "Overview", link: "/aptitude/week-1/" },
                { label: "Quantitative Ability", link: "/aptitude/week-1/quantitative-ability" },
                { label: "Logical Reasoning", link: "/aptitude/week-1/logical-reasoning" },
                { label: "Verbal Reasoning", link: "/aptitude/week-1/verbal-reasoning" },
                { label: "Data Interpretation", link: "/aptitude/week-1/data-interpretation" },
                { label: "Problem Solving", link: "/aptitude/week-1/problem-solving" },
              ],
            },
            {
              label: "Week 2",
              collapsed: true,
              items: [
                { label: "Overview", link: "/aptitude/week-2/" },
                { label: "Quantitative Ability", link: "/aptitude/week-2/quantitative-ability" },
                { label: "Logical Reasoning", link: "/aptitude/week-2/logical-reasoning" },
                { label: "Verbal Reasoning", link: "/aptitude/week-2/verbal-reasoning" },
                { label: "Data Interpretation", link: "/aptitude/week-2/data-interpretation" },
                { label: "Problem Solving", link: "/aptitude/week-2/problem-solving" },
              ],
            },
            {
              label: "Week 3",
              collapsed: true,
              items: [
                { label: "Overview", link: "/aptitude/week-3/" },
                { label: "Quantitative Ability", link: "/aptitude/week-3/quantitative-ability" },
                { label: "Logical Reasoning", link: "/aptitude/week-3/logical-reasoning" },
                { label: "Verbal Reasoning", link: "/aptitude/week-3/verbal-reasoning" },
                { label: "Data Interpretation", link: "/aptitude/week-3/data-interpretation" },
                { label: "Problem Solving", link: "/aptitude/week-3/problem-solving" },
              ],
            },
            {
              label: "Week 4",
              collapsed: true,
              items: [
                { label: "Overview", link: "/aptitude/week-4/" },
                { label: "Quantitative Ability", link: "/aptitude/week-4/quantitative-ability" },
                { label: "Logical Reasoning", link: "/aptitude/week-4/logical-reasoning" },
                { label: "Verbal Reasoning", link: "/aptitude/week-4/verbal-reasoning" },
                { label: "Data Interpretation", link: "/aptitude/week-4/data-interpretation" },
                { label: "Problem Solving", link: "/aptitude/week-4/problem-solving" },
              ],
            },
            {
              label: "Week 5",
              collapsed: true,
              items: [
                { label: "Overview", link: "/aptitude/week-5/" },
                { label: "Quantitative Ability", link: "/aptitude/week-5/quantitative-ability" },
                { label: "Logical Reasoning", link: "/aptitude/week-5/logical-reasoning" },
                { label: "Verbal Reasoning", link: "/aptitude/week-5/verbal-reasoning" },
                { label: "Data Interpretation", link: "/aptitude/week-5/data-interpretation" },
                { label: "Problem Solving", link: "/aptitude/week-5/problem-solving" },
              ],
            },
          ],
        },

        {
          label: "ECE",
          collapsed: true,
          items: [
            {
              label: "Week 1",
              collapsed: true,
              items: [
                { label: "Overview", link: "/ece/week-1/" },
                { label: "Digital Logic", link: "/ece/week-1/digital-logic" },
                { label: "Microprocessors", link: "/ece/week-1/microprocessors" },
                { label: "Signals & Systems", link: "/ece/week-1/signals-systems" },
                { label: "Network Analysis", link: "/ece/week-1/networkanalysis" },
                { label: "Power Electronics", link: "/ece/week-1/power-electronics" },
              ], 
            },
            {
              label: "Week 2",
              collapsed: true,
              items: [
                { label: "Overview", link: "/ece/week-2/" },
                { label: "Digital Logic", link: "/ece/week-2/digital-logic" },
                { label: "Microprocessors", link: "/ece/week-2/microprocessors" },
                { label: "Signals & Systems", link: "/ece/week-2/signals-systems" },
                { label: "Network Analysis", link: "/ece/week-2/networkanalysis" },
                { label: "Power Electronics", link: "/ece/week-2/power-electronics" },
              ],
            },
            {
              label: "Week 3",
              collapsed: true,
              items: [
                { label: "Overview", link: "/ece/week-3/" },
                { label: "Digital Logic", link: "/ece/week-3/digital-logic" },
                { label: "Microprocessors", link: "/ece/week-3/microprocessors" },
                { label: "Signals & Systems", link: "/ece/week-3/signals-systems" },
                { label: "Network Analysis", link: "/ece/week-3/networkanalysis" },
                { label: "Power Electronics", link: "/ece/week-3/power-electronics" },
              ],
            },
            {
              label: "Week 4",
              collapsed: true,
              items: [
                { label: "Overview", link: "/ece/week-4/" },
                { label: "Digital Logic", link: "/ece/week-4/digital-logic" },
                { label: "Microprocessors", link: "/ece/week-4/microprocessors" },
                { label: "Signals & Systems", link: "/ece/week-4/signals-systems" },
                { label: "Network Analysis", link: "/ece/week-4/networkanalysis" },
                { label: "Power Electronics", link: "/ece/week-4/power-electronics" },
              ],
            },
            {
              label: "Week 5",
              collapsed: true,
              items: [
                { label: "Overview", link: "/ece/week-5/" },
                { label: "Digital Logic", link: "/ece/week-5/digital-logic" },
                { label: "Microprocessors", link: "/ece/week-5/microprocessors" },
                { label: "Signals & Systems", link: "/ece/week-5/signals-systems" },
                { label: "Network Analysis", link: "/ece/week-5/networkanalysis" },
                { label: "Power Electronics", link: "/ece/week-5/power-electronics" },
              ],
            },
          ],
        },

        {
          label: "EEE",
          collapsed: true,
          items: [
            {
              label: "Week 1",
              collapsed: true,
              items: [
                { label: "Overview", link: "/eee/week-1/" },
                { label: "Circuit Theory", link: "/eee/week-1/circuit-theory" },
                { label: "Power Systems", link: "/eee/week-1/power-systems" },
                { label: "Electrical Machines", link: "/eee/week-1/electrical-machines" },
                { label: "Control Systems", link: "/eee/week-1/control-systems" },
                { label: "Power Generation", link: "/eee/week-1/power-generation" },
              ],
            },
            {
              label: "Week 2",
              collapsed: true,
              items: [
                { label: "Overview", link: "/eee/week-2/" },
                { label: "Circuit Theory", link: "/eee/week-2/circuit-theory" },
                { label: "Power Systems", link: "/eee/week-2/power-systems" },
                { label: "Electrical Machines", link: "/eee/week-2/electrical-machines" },
                { label: "Control Systems", link: "/eee/week-2/control-systems" },
                { label: "Power Generation", link: "/eee/week-2/power-generation" },
              ],
            },
            {
              label: "Week 3",
              collapsed: true,
              items: [
                { label: "Overview", link: "/eee/week-3/" },
                { label: "Circuit Theory", link: "/eee/week-3/circuit-theory" },
                { label: "Power Systems", link: "/eee/week-3/power-systems" },
                { label: "Electrical Machines", link: "/eee/week-3/electrical-machines" },
                { label: "Control Systems", link: "/eee/week-3/control-systems" },
                { label: "Power Generation", link: "/eee/week-3/power-generation" },
              ],
            },
            {
              label: "Week 4",
              collapsed: true,
              items: [
                { label: "Overview", link: "/eee/week-4/" },
                { label: "Circuit Theory", link: "/eee/week-4/circuit-theory" },
                { label: "Power Systems", link: "/eee/week-4/power-systems" },
                { label: "Electrical Machines", link: "/eee/week-4/electrical-machines" },
                { label: "Control Systems", link: "/eee/week-4/control-systems" },
                { label: "Power Generation", link: "/eee/week-4/power-generation" },
              ],
            },
            {
              label: "Week 5",
              collapsed: true,
              items: [
                { label: "Overview", link: "/eee/week-5/" },
                { label: "Circuit Theory", link: "/eee/week-5/circuit-theory" },
                { label: "Power Systems", link: "/eee/week-5/power-systems" },
                { label: "Electrical Machines", link: "/eee/week-5/electrical-machines" },
                { label: "Control Systems", link: "/eee/week-5/control-systems" },
                { label: "Power Generation", link: "/eee/week-5/power-generation" },
              ],
            },
          ],
        },

        {
          label: "IT",
          collapsed: true,
          items: [
            {
              label: "Week 1",
              collapsed: true,
              items: [
                { label: "Overview", link: "/it/week-1/"  },
                { label: "AIML", link: "/it/week-1/aiml" },
                { label: "DSA", link: "/it/week-1/dsa" },
                { label: "Git and GitHub", link: "/it/week-1/git" },
                { label: "CN", link: "/it/week-1/cn" },
                { label: "OOPS", link: "/it/week-1/oops" },
                { label: "OS", link: "/it/week-1/os" },
                { label: "DBMS", link: "/it/week-1/dbms" },
              ],
            },
            {
              label: "Week 2",
              collapsed: true,
              items: [
                
                { label: "Overview", link: "/it/week-2/" },
                { label: "AIML", link: "/it/week-2/aiml" },
                { label: "DSA", link: "/it/week-2/dsa" },
                { label: "CN", link: "/it/week-2/cn" },
                { label: "OOPS", link: "/it/week-2/oops" },
                { label: "OS", link: "/it/week-2/os" },
                { label: "DBMS", link: "/it/week-2/dbms" },
              ],
            },
            {
              label: "Week 3",
              collapsed: true,
              items: [
                { label: "Overview", link: "/it/week-3/" },
                { label: "AIML", link: "/it/week-1/aiml" },
                { label: "DSA", link: "/it/week-3/dsa" },
                { label: "CN", link: "/it/week-3/cn" },
                { label: "OOPS", link: "/it/week-3/oops" },
                { label: "OS", link: "/it/week-3/os" },
                { label: "DBMS", link: "/it/week-3/dbms" },
              ],
            },
            {
              label: "Week 4",
              collapsed: true,
              items: [
                { label: "Overview", link: "/it/week-4/" },
                { label: "AIML", link: "/it/week-1/aiml" },
                { label: "DSA", link: "/it/week-4/dsa" },
                { label: "CN", link: "/it/week-4/cn" },
                { label: "OOPS", link: "/it/week-4/oops" },
                { label: "OS", link: "/it/week-4/os" },
                { label: "DBMS", link: "/it/week-4/dbms" },
              ],
            },
            {
              label: "Week 5",
              collapsed: true,
              items: [
                { label: "Overview", link: "/it/week-5/" },
                { label: "AIML", link: "/it/week-1/aiml" },
                { label: "DSA", link: "/it/week-5/dsa" },
                { label: "CN", link: "/it/week-5/cn" },
                { label: "OOPS", link: "/it/week-5/oops" },
                { label: "OS", link: "/it/week-5/os" },
                { label: "DBMS", link: "/it/week-5/dbms" },
              ],
            },
          ],
        },

        {
          label: "Mechanical",
          collapsed: true,
          items: [
            {
              label: "Week 1",
              collapsed: true,
              items: [
                { label: "Overview", link: "/mech/week-1/" },
                { label: "Thermodynamics", link: "/mech/week-1/thermodynamics" },
                { label: "Strength of Materials", link: "/mech/week-1/strength-materials" },
                { label: "Machine Design", link: "/mech/week-1/machine-design" },
                { label: "Fluid Mechanics", link: "/mech/week-1/fluid-mechanics" },
                { label: "Manufacturing", link: "/mech/week-1/manufacturing" },
              ],
            },
            {
              label: "Week 2",
              collapsed: true,
              items: [
                { label: "Overview", link: "/mech/week-2/" },
                { label: "Thermodynamics", link: "/mech/week-2/thermodynamics" },
                { label: "Strength of Materials", link: "/mech/week-2/strength-materials" },
                { label: "Machine Design", link: "/mech/week-2/machine-design" },
                { label: "Fluid Mechanics", link: "/mech/week-2/fluid-mechanics" },
                { label: "Manufacturing", link: "/mech/week-2/manufacturing" },
              ],
            },
            {
              label: "Week 3",
              collapsed: true,
              items: [
                { label: "Overview", link: "/mech/week-3/" },
                { label: "Thermodynamics", link: "/mech/week-3/thermodynamics" },
                { label: "Strength of Materials", link: "/mech/week-3/strength-materials" },
                { label: "Machine Design", link: "/mech/week-3/machine-design" },
                { label: "Fluid Mechanics", link: "/mech/week-3/fluid-mechanics" },
                { label: "Manufacturing", link: "/mech/week-3/manufacturing" },
              ],
            },
            {
              label: "Week 4",
              collapsed: true,
              items: [
                { label: "Overview", link: "/mech/week-4/" },
                { label: "Thermodynamics", link: "/mech/week-4/thermodynamics" },
                { label: "Strength of Materials", link: "/mech/week-4/strength-materials" },
                { label: "Machine Design", link: "/mech/week-4/machine-design" },
                { label: "Fluid Mechanics", link: "/mech/week-4/fluid-mechanics" },
                { label: "Manufacturing", link: "/mech/week-4/manufacturing" },
              ],
            },
            {
              label: "Week 5",
              collapsed: true,
              items: [
                { label: "Overview", link: "/mech/week-5/" },
                { label: "Thermodynamics", link: "/mech/week-5/thermodynamics" },
                { label: "Strength of Materials", link: "/mech/week-5/strength-materials" },
                { label: "Machine Design", link: "/mech/week-5/machine-design" },
                { label: "Fluid Mechanics", link: "/mech/week-5/fluid-mechanics" },
                { label: "Manufacturing", link: "/mech/week-5/manufacturing" },
              ],
            },
          ],
        },

        {
          label: "Answer Keys",
          collapsed: true,
          items: [
            {
              label: "IT",
              items: [
                { label: "Week 1", link: "/answer-keys/it/week-1" },
                { label: "Week 2", link: "/answer-keys/it/week-2" },
                { label: "Week 3", link: "/answer-keys/it/week-3" },
                { label: "Week 4", link: "/answer-keys/it/week-4" },
                { label: "Week 5", link: "/answer-keys/it/week-5" },
              ],
            },
            {
              label: "ECE",
              items: [
                { label: "Week 1", link: "/answer-keys/ece/week-1" },
                { label: "Week 2", link: "/answer-keys/ece/week-2" },
                { label: "Week 3", link: "/answer-keys/ece/week-3" },
                { label: "Week 4", link: "/answer-keys/ece/week-4" },
                { label: "Week 5", link: "/answer-keys/ece/week-5" },
              ],
            },
            {
              label: "EEE",
              items: [
                { label: "Week 1", link: "/answer-keys/eee/week-1" },
                { label: "Week 2", link: "/answer-keys/eee/week-2" },
                { label: "Week 3", link: "/answer-keys/eee/week-3" },
                { label: "Week 4", link: "/answer-keys/eee/week-4" },
                { label: "Week 5", link: "/answer-keys/eee/week-5" },
              ],
            },
            {
              label: "Mechanical",
              items: [
                { label: "Week 1", link: "/answer-keys/mech/week-1" },
                { label: "Week 2", link: "/answer-keys/mech/week-2" },
                { label: "Week 3", link: "/answer-keys/mech/week-3" },
                { label: "Week 4", link: "/answer-keys/mech/week-4" },
                { label: "Week 5", link: "/answer-keys/mech/week-5" },
              ],
            },
            {
              label: "Aptitude",
              items: [
                { label: "Week 1", link: "/answer-keys/aptitude/week-1" },
                { label: "Week 2", link: "/answer-keys/aptitude/week-2" },
                { label: "Week 3", link: "/answer-keys/aptitude/week-3" },
                { label: "Week 4", link: "/answer-keys/aptitude/week-4" },
                { label: "Week 5", link: "/answer-keys/aptitude/week-5" },
              ],
            },
          ],
        },
        
      ],
    }),

    // MDX support (optional but good to keep)
    mdx(
        {
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatex],
		}
    ),
  ],
});