// assets/js/script.js
console.log("Custom JS loaded.");

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre code').forEach((block) => {
        // Create and append the copy button
        let btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.textContent = 'Copy';
        block.parentNode.insertBefore(btn, block);

        // Add click event listener
        btn.addEventListener('click', () => {
            // Copy code to clipboard
            let code = block.textContent;
            let el = document.createElement('textarea');
            el.value = code;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);

            // Button feedback
            btn.textContent = 'Copied!';
            setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
        });
    });
});
