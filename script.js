const prompts = [
            "Siv?",
            "Are you uh sure?",
            "Pleaseeeee",
            "SIV? WHYYYYYYY",
            "Pretty please?",
            "Ok chat this has to be ragebait now"
        ];

        let noClickCount = 0;
        const maxNoClicks = 6;

        const yesBtn = document.getElementById('yesBtn');
        const noBtn = document.getElementById('noBtn');
        const prompt = document.getElementById('prompt');
        const buttonContainer = document.getElementById('buttonContainer');
        const landingPage = document.getElementById('landingPage');
        const yippeePage = document.getElementById('yippeePage');
        const container = document.querySelector('.container');

        // Get container dimensions for random positioning
        function getRandomPosition() {
            const containerRect = buttonContainer.getBoundingClientRect();
            const btnRect = noBtn.getBoundingClientRect();
            
            const maxX = containerRect.width - btnRect.width - 100;
            const maxY = containerRect.height - btnRect.height - 100;
            
            const randomX = Math.random() * maxX - (maxX / 2);
            const randomY = Math.random() * maxY - (maxY / 2);
            
            return { x: randomX, y: randomY };
        }

        noBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (noClickCount < maxNoClicks) {
                noClickCount++;
                
                // Change prompt
                if (noClickCount < prompts.length) {
                    prompt.textContent = prompts[noClickCount];
                }
                
                // Move button to random position after first click
                if (noClickCount === 1) {
                    noBtn.style.position = 'absolute';
                }
                const pos = getRandomPosition();
                noBtn.style.left = pos.x + 'px';
                noBtn.style.top = pos.y + 'px';
                
                // Decrease no button size (shrinks to nearly nothing)
                const newNoScale = 1 - (noClickCount * 0.18);
                noBtn.style.transform = `scale(${newNoScale})`;
                
                // Increase yes button size (grows very large)
                const newYesScale = 1 + (noClickCount * 0.5);
                yesBtn.style.transform = `scale(${newYesScale})`;
                
                // On 5th click (6th total attempt)
                if (noClickCount === maxNoClicks) {
                    setTimeout(() => {
                        prompt.textContent = 'o k a y :(';
                        container.classList.add('sad-state');
                    }, 300);
                }
            }
        });

        yesBtn.addEventListener('click', function() {
            landingPage.style.display = 'none';
            yippeePage.classList.add('active');
        });