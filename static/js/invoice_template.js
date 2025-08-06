const invoiceTemplates = {
    classic: {
        name: "Classic Invoice",
        description: "Traditional layout with clear sections",
        category: "Business",
        html: (data) => `
            <div class="invoice-paper a4 classic-template">
                <div class="header">
                    <div class="company-info">
                        <div class="company-name">${(data.fromAddress || '').split('\n')[0] || 'Your Company'}</div>
                        <div>${(data.fromAddress || '').replace(/\n/g, '<br>') || 'Address'}</div>
                        <div class="gst-info">GSTIN: ${data.supplierGst || ''}</div>
                    </div>
                    <div class="invoice-title">
                        <h1>TAX INVOICE</h1>
                        <div class="invoice-number"># ${data.invoiceNumber || 'INV-001'}</div>
                        <div class="invoice-date">Date: ${data.invoiceDate || new Date().toLocaleDateString()}</div>
                    </div>
                </div>

                <div class="address-section">
                    <div class="bill-to">
                        <h3>Bill To:</h3>
                        <div class="customer-info">
                            <div class="customer-name">${(data.toAddress || '').split('\n')[0] || 'Customer'}</div>
                            <div>${(data.toAddress || '').replace(/\n/g, '<br>') || 'Address'}</div>
                            <div class="gst-info">GSTIN: ${data.customerGst || ''}</div>
                        </div>
                    </div>
                </div>

                <table class="items-table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Tax %</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.itemsHtml || ''}
                    </tbody>
                </table>

                <div class="totals-section">
                    <div class="totals-row">
                        <span>Subtotal:</span>
                        <span>${(data.subtotal || 0).toFixed(2)}</span>
                    </div>
                    <div class="totals-row">
                        <span>Tax Amount:</span>
                        <span>${(data.taxAmount || 0).toFixed(2)}</span>
                    </div>
                    <div class="totals-row grand-total">
                        <span>Total:</span>
                        <span>₹${((data.subtotal || 0) + (data.taxAmount || 0)).toFixed(2)}</span>
                    </div>
                </div>

                <div class="footer">
                    <div class="terms">${data.taxDetails || ''}</div>
                    <div class="signature">
                        <div class="signature-line"></div>
                        <div>Authorized Signature</div>
                    </div>
                </div>
            </div>
        `,
        styles: `
            .classic-template {
                font-family: 'Times New Roman', serif;
                color: #333;
            }
            
            .classic-template .header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 30px;
                border-bottom: 2px solid #333;
                padding-bottom: 20px;
            }
            
            .classic-template .company-name {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 5px;
            }
            
            .classic-template .invoice-title h1 {
                font-size: 24px;
                margin: 0 0 10px 0;
                text-align: right;
            }
            
            .classic-template .invoice-number {
                font-size: 16px;
                text-align: right;
            }
            
            .classic-template .invoice-date {
                font-size: 14px;
                text-align: right;
            }
            
            .classic-template .address-section {
                margin: 25px 0;
            }
            
            .classic-template .bill-to h3 {
                font-size: 16px;
                margin-bottom: 10px;
            }
            
            .classic-template .customer-name {
                font-weight: bold;
            }
            
            .classic-template .gst-info {
                font-style: italic;
                margin-top: 5px;
            }
            
            .classic-template .items-table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
            }
            
            .classic-template .items-table th {
                background-color: #f2f2f2;
                padding: 8px;
                text-align: left;
                border: 1px solid #ddd;
            }
            
            .classic-template .items-table td {
                padding: 8px;
                border: 1px solid #ddd;
            }
            
            .classic-template .totals-section {
                margin-top: 20px;
                width: 100%;
                max-width: 300px;
                margin-left: auto;
            }
            
            .classic-template .totals-row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 8px;
            }
            
            .classic-template .grand-total {
                font-weight: bold;
                font-size: 16px;
                margin-top: 10px;
                padding-top: 10px;
                border-top: 1px solid #333;
            }
            
            .classic-template .footer {
                margin-top: 40px;
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
            }
            
            .classic-template .signature-line {
                width: 200px;
                border-bottom: 1px solid #333;
                margin-bottom: 5px;
            }
        `
    },
    modern: {
        name: "Modern Invoice",
        description: "Clean design with accent colors",
        category: "Business",
        html: (data) => `
            <div class="invoice-paper a4 modern-template">
                <div class="header">
                    <div class="company-info">
                        <h1>${(data.fromAddress || '').split('\n')[0] || 'Your Company'}</h1>
                        <div class="address">${(data.fromAddress || '').replace(/\n/g, '<br>') || 'Address'}</div>
                        <div class="gst">GSTIN: ${data.supplierGst || ''}</div>
                    </div>
                    <div class="invoice-meta">
                        <div class="invoice-title">INVOICE</div>
                        <div class="invoice-number">#${data.invoiceNumber || 'INV-001'}</div>
                        <div class="invoice-date">${data.invoiceDate || new Date().toLocaleDateString()}</div>
                    </div>
                </div>

                <div class="client-info">
                    <div class="bill-to">
                        <h3>BILL TO</h3>
                        <div class="client-details">
                            <div class="client-name">${(data.toAddress || '').split('\n')[0] || 'Customer'}</div>
                            <div>${(data.toAddress || '').replace(/\n/g, '<br>') || 'Address'}</div>
                            <div class="gst">GSTIN: ${data.customerGst || ''}</div>
                        </div>
                    </div>
                </div>

                <table class="items-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>DESCRIPTION</th>
                            <th>QTY</th>
                            <th>RATE</th>
                            <th>TAX %</th>
                            <th>AMOUNT</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.itemsHtml || ''}
                    </tbody>
                </table>

                <div class="summary">
                    <div class="notes">
                        <h4>NOTES</h4>
                        <p>${data.taxDetails || ''}</p>
                    </div>
                    <div class="totals">
                        <div class="total-row">
                            <span>SUBTOTAL</span>
                            <span>${(data.subtotal || 0).toFixed(2)}</span>
                        </div>
                        <div class="total-row">
                            <span>TAX</span>
                            <span>${(data.taxAmount || 0).toFixed(2)}</span>
                        </div>
                        <div class="total-row grand-total">
                            <span>TOTAL</span>
                            <span>₹${((data.subtotal || 0) + (data.taxAmount || 0)).toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <div class="footer">
                    <div class="thank-you">Thank you for your business!</div>
                    <div class="signature">
                        <div class="signature-line"></div>
                        <div>Authorized Signature</div>
                    </div>
                </div>
            </div>
        `,
        styles: `
            .modern-template {
                font-family: 'Helvetica Neue', Arial, sans-serif;
                color: #333;
            }
            
            .modern-template .header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 40px;
            }
            
            .modern-template .company-info h1 {
                font-size: 22px;
                color: #2196F3;
                margin: 0 0 10px 0;
            }
            
            .modern-template .address {
                color: #666;
                margin-bottom: 5px;
            }
            
            .modern-template .gst {
                font-size: 13px;
                color: #888;
            }
            
            .modern-template .invoice-meta {
                text-align: right;
            }
            
            .modern-template .invoice-title {
                font-size: 28px;
                font-weight: bold;
                color: #2196F3;
                margin-bottom: 5px;
            }
            
            .modern-template .invoice-number {
                font-size: 16px;
                margin-bottom: 5px;
            }
            
            .modern-template .invoice-date {
                font-size: 14px;
                color: #888;
            }
            
            .modern-template .client-info {
                margin-bottom: 30px;
            }
            
            .modern-template .bill-to h3 {
                font-size: 16px;
                color: #2196F3;
                margin-bottom: 10px;
                text-transform: uppercase;
            }
            
            .modern-template .client-name {
                font-weight: bold;
                margin-bottom: 5px;
            }
            
            .modern-template .items-table {
                width: 100%;
                border-collapse: collapse;
                margin: 30px 0;
            }
            
            .modern-template .items-table th {
                background-color: #2196F3;
                color: white;
                padding: 10px;
                text-align: left;
                font-weight: normal;
                text-transform: uppercase;
                font-size: 12px;
            }
            
            .modern-template .items-table td {
                padding: 10px;
                border-bottom: 1px solid #eee;
            }
            
            .modern-template .summary {
                display: flex;
                justify-content: space-between;
                margin-top: 30px;
            }
            
            .modern-template .notes h4 {
                color: #2196F3;
                margin-bottom: 10px;
            }
            
            .modern-template .notes p {
                color: #666;
                font-size: 14px;
            }
            
            .modern-template .totals {
                width: 200px;
            }
            
            .modern-template .total-row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
            }
            
            .modern-template .grand-total {
                font-weight: bold;
                font-size: 16px;
                padding-top: 10px;
                border-top: 1px solid #2196F3;
            }
            
            .modern-template .footer {
                margin-top: 50px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .modern-template .thank-you {
                font-style: italic;
                color: #888;
            }
            
            .modern-template .signature-line {
                width: 200px;
                border-bottom: 1px solid #333;
                margin-bottom: 5px;
            }
        `
    },
    minimal: {
        name: "Minimal Invoice",
        description: "Simple and clean layout",
        category: "Minimal",
        html: (data) => `
            <div class="invoice-paper a4 minimal-template">
                <div class="header">
                    <div class="company">
                        <div class="name">${(data.fromAddress || '').split('\n')[0] || 'Your Company'}</div>
                        <div class="address">${(data.fromAddress || '').replace(/\n/g, '<br>') || 'Address'}</div>
                        <div class="gst">GSTIN: ${data.supplierGst || ''}</div>
                    </div>
                    <div class="invoice-info">
                        <h1>Invoice</h1>
                        <div class="number">#${data.invoiceNumber || 'INV-001'}</div>
                        <div class="date">${data.invoiceDate || new Date().toLocaleDateString()}</div>
                    </div>
                </div>

                <div class="divider"></div>

                <div class="client">
                    <h3>Client</h3>
                    <div class="name">${(data.toAddress || '').split('\n')[0] || 'Customer'}</div>
                    <div class="address">${(data.toAddress || '').replace(/\n/g, '<br>') || 'Address'}</div>
                    <div class="gst">GSTIN: ${data.customerGst || ''}</div>
                </div>

                <div class="divider"></div>

                <table class="items">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Tax</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.itemsHtml || ''}
                    </tbody>
                </table>

                <div class="divider"></div>

                <div class="totals">
                    <div class="row">
                        <div>Subtotal</div>
                        <div>${(data.subtotal || 0).toFixed(2)}</div>
                    </div>
                    <div class="row">
                        <div>Tax</div>
                        <div>${(data.taxAmount || 0).toFixed(2)}</div>
                    </div>
                    <div class="row total">
                        <div>Total</div>
                        <div>₹${((data.subtotal || 0) + (data.taxAmount || 0)).toFixed(2)}</div>
                    </div>
                </div>

                <div class="footer">
                    <div class="notes">
                        <div>Notes</div>
                        <p>${data.taxDetails || ''}</p>
                    </div>
                    <div class="signature">
                        <div class="line"></div>
                        <div>Signature</div>
                    </div>
                </div>
            </div>
        `,
        styles: `
            .minimal-template {
                font-family: 'Arial', sans-serif;
                color: #333;
            }
            
            .minimal-template .header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 20px;
            }
            
            .minimal-template .company .name {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 5px;
            }
            
            .minimal-template .company .address {
                color: #666;
                margin-bottom: 5px;
            }
            
            .minimal-template .company .gst {
                font-size: 12px;
                color: #999;
            }
            
            .minimal-template .invoice-info h1 {
                font-size: 24px;
                margin: 0 0 5px 0;
                text-align: right;
            }
            
            .minimal-template .invoice-info .number {
                text-align: right;
                margin-bottom: 3px;
            }
            
            .minimal-template .invoice-info .date {
                text-align: right;
                color: #666;
                font-size: 14px;
            }
            
            .minimal-template .divider {
                height: 1px;
                background-color: #eee;
                margin: 20px 0;
            }
            
            .minimal-template .client h3 {
                font-size: 16px;
                margin-bottom: 10px;
                color: #666;
            }
            
            .minimal-template .client .name {
                font-weight: bold;
                margin-bottom: 5px;
            }
            
            .minimal-template .client .address {
                color: #666;
                margin-bottom: 5px;
            }
            
            .minimal-template .client .gst {
                font-size: 12px;
                color: #999;
            }
            
            .minimal-template .items {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
            }
            
            .minimal-template .items th {
                text-align: left;
                padding: 8px;
                border-bottom: 1px solid #eee;
                font-weight: normal;
                color: #666;
            }
            
            .minimal-template .items td {
                padding: 8px;
                border-bottom: 1px solid #eee;
            }
            
            .minimal-template .totals {
                width: 100%;
                max-width: 300px;
                margin-left: auto;
            }
            
            .minimal-template .totals .row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 8px;
            }
            
            .minimal-template .totals .total {
                font-weight: bold;
                margin-top: 10px;
                padding-top: 10px;
                border-top: 1px solid #333;
            }
            
            .minimal-template .footer {
                margin-top: 40px;
                display: flex;
                justify-content: space-between;
            }
            
            .minimal-template .footer .notes {
                width: 60%;
            }
            
            .minimal-template .footer .notes p {
                color: #666;
                font-size: 14px;
            }
            
            .minimal-template .signature .line {
                width: 200px;
                border-bottom: 1px solid #333;
                margin-bottom: 5px;
            }
        `
    },
    professional: {
        name: "Professional Invoice",
        description: "Corporate style with elegant typography",
        category: "Business",
        html: (data) => `
            <div class="invoice-paper a4 professional-template">
                <div class="letterhead">
                    <div class="company-details">
                        <h1>${(data.fromAddress || '').split('\n')[0] || 'Your Company'}</h1>
                        <div class="address">${(data.fromAddress || '').replace(/\n/g, '<br>') || 'Address'}</div>
                        <div class="gst">GSTIN: ${data.supplierGst || ''}</div>
                    </div>
                    <div class="invoice-header">
                        <div class="title">INVOICE</div>
                        <div class="details">
                            <div class="number">Invoice #: ${data.invoiceNumber || 'INV-001'}</div>
                            <div class="date">Date: ${data.invoiceDate || new Date().toLocaleDateString()}</div>
                        </div>
                    </div>
                </div>

                <div class="client-section">
                    <div class="to-label">To:</div>
                    <div class="client-details">
                        <div class="name">${(data.toAddress || '').split('\n')[0] || 'Customer'}</div>
                        <div class="address">${(data.toAddress || '').replace(/\n/g, '<br>') || 'Address'}</div>
                        <div class="gst">GSTIN: ${data.customerGst || ''}</div>
                    </div>
                </div>

                <table class="items-table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Tax %</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.itemsHtml || ''}
                    </tbody>
                </table>

                <div class="summary-section">
                    <div class="notes">
                        <h4>Notes:</h4>
                        <p>${data.taxDetails || ''}</p>
                    </div>
                    <div class="totals">
                        <div class="subtotal">
                            <span>Subtotal:</span>
                            <span>${(data.subtotal || 0).toFixed(2)}</span>
                        </div>
                        <div class="tax">
                            <span>Tax:</span>
                            <span>${(data.taxAmount || 0).toFixed(2)}</span>
                        </div>
                        <div class="total">
                            <span>Total Due:</span>
                            <span>₹${((data.subtotal || 0) + (data.taxAmount || 0)).toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                <div class="footer">
                    <div class="thank-you">Thank you for your business!</div>
                    <div class="signature-section">
                        <div class="signature-line"></div>
                        <div>Authorized Signature</div>
                    </div>
                </div>
            </div>
        `,
        styles: `
            .professional-template {
                font-family: 'Georgia', serif;
                color: #333;
            }
            
            .professional-template .letterhead {
                display: flex;
                justify-content: space-between;
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 1px solid #ddd;
            }
            
            .professional-template .company-details h1 {
                font-size: 22px;
                margin: 0 0 10px 0;
                font-weight: normal;
            }
            
            .professional-template .address {
                color: #666;
                margin-bottom: 5px;
            }
            
            .professional-template .gst {
                font-size: 13px;
                color: #888;
            }
            
            .professional-template .invoice-header {
                text-align: right;
            }
            
            .professional-template .invoice-header .title {
                font-size: 28px;
                margin-bottom: 10px;
                color: #555;
            }
            
            .professional-template .invoice-header .details {
                font-size: 14px;
                color: #666;
            }
            
            .professional-template .client-section {
                display: flex;
                margin-bottom: 30px;
            }
            
            .professional-template .to-label {
                font-weight: bold;
                margin-right: 15px;
            }
            
            .professional-template .client-details .name {
                font-weight: bold;
                margin-bottom: 5px;
            }
            
            .professional-template .client-details .address {
                color: #666;
                margin-bottom: 5px;
            }
            
            .professional-template .items-table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
            }
            
            .professional-template .items-table th {
                text-align: left;
                padding: 10px;
                border-bottom: 2px solid #ddd;
                font-weight: normal;
                color: #555;
            }
            
            .professional-template .items-table td {
                padding: 10px;
                border-bottom: 1px solid #eee;
            }
            
            .professional-template .summary-section {
                display: flex;
                justify-content: space-between;
                margin-top: 30px;
            }
            
            .professional-template .notes h4 {
                font-size: 16px;
                color: #555;
                margin-bottom: 10px;
            }
            
            .professional-template .notes p {
                color: #666;
                font-size: 14px;
            }
            
            .professional-template .totals {
                width: 250px;
            }
            
            .professional-template .totals > div {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
            }
            
            .professional-template .total {
                font-weight: bold;
                font-size: 16px;
                padding-top: 10px;
                border-top: 1px solid #ddd;
            }
            
            .professional-template .footer {
                margin-top: 50px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .professional-template .thank-you {
                font-style: italic;
                color: #888;
            }
            
            .professional-template .signature-line {
                width: 200px;
                border-bottom: 1px solid #333;
                margin-bottom: 5px;
            }
        `
    }
};

// Helper function to generate items HTML for all templates
function generateItemsHtml(items) {
    let html = '';
    (items || []).forEach((item, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.description || 'Item'}</td>
                <td>${item.quantity || '1'}</td>
                <td>${(parseFloat(item.price_per_unit) || 0).toFixed(2)}</td>
                <td>${item.gst || '0'}%</td>
                <td>${(parseFloat(item.amount) || 0).toFixed(2)}</td>
            </tr>
        `;
    });
    return html;
}

// Function to render template preview
function renderTemplatePreview(templateKey) {
    const template = invoiceTemplates[templateKey];
    if (!template) return document.createElement('div');
    
    // Get current form values
    const templateData = {
        fromAddress: $('#fromAddress').val() || '',
        toAddress: $('#toAddress').val() || '',
        invoiceNumber: $('#invoiceNumber').val() || 'INV-001',
        invoiceDate: $('#invoiceDate').val() || new Date().toLocaleDateString(),
        supplierGst: $('#supplierGst').val() || '',
        customerGst: $('#customerGst').val() || '',
        taxDetails: $('#taxDetails').val() || '',
        subtotal: 0,
        taxAmount: 0,
        items: []
    };
    
    // Calculate totals
    $('#itemsTableBody tr').each(function() {
        const row = $(this);
        const qty = parseFloat(row.find('.qty').val()) || 0;
        const rate = parseFloat(row.find('.rate').val()) || 0;
        const taxRate = parseFloat(row.find('.tax').val()) || 0;
        const amount = parseFloat(row.find('.amount').val()) || 0;
        
        templateData.items.push({
            description: row.find('.item-desc').val() || 'Item',
            quantity: qty,
            price_per_unit: rate,
            gst: taxRate,
            amount: amount
        });
        
        templateData.subtotal += amount / (1 + (taxRate / 100));
        templateData.taxAmount += amount - (amount / (1 + (taxRate / 100)));
    });
    
    templateData.itemsHtml = generateItemsHtml(templateData.items);
    
    // Create a temporary div to hold the template
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = template.html(templateData);
    
    // Apply the template-specific styles
    const style = document.createElement('style');
    style.textContent = template.styles;
    tempDiv.appendChild(style);
    
    return tempDiv;
}

// Initialize template selection
document.addEventListener('DOMContentLoaded', function() {
    // Load template selection when choose-template tab is shown
    document.querySelector('.sidebar-menu li[onclick*="choose-template"]')?.addEventListener('click', function() {
        loadTemplateSelection();
    });
});

function loadTemplateSelection() {
    const templateSection = document.getElementById('choose-template');
    if (!templateSection) return;
    
    templateSection.innerHTML = `
        <div class="card">
            <div class="content-header">
                <h2>Choose Template</h2>
                <div class="template-controls">
                    <select id="template-filter" class="filter-select">
                        <option value="all">All Categories</option>
                        <option value="Business">Business</option>
                        <option value="Minimal">Minimal</option>
                    </select>
                    <button class="upload-btn" id="use-template-btn" style="display:none;">
                        <i class="fas fa-check"></i> Use Selected Template
                    </button>
                </div>
            </div>
            <div class="template-grid-container">
                <div class="template-grid">
                    <!-- Templates will be inserted here -->
                </div>
            </div>
        </div>
    `;

    // Add CSS for the template grid
    const style = document.createElement('style');
    style.textContent = `
        .template-grid-container {
            padding: 20px;
            overflow-y: auto;
            max-height: calc(100vh - 200px);
        }
        
        .template-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 25px;
            padding: 10px;
        }
        
        .template-card {
            border: 1px solid #e0e0e0;
            border-radius: 12px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.2s ease;
            background: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            height: 450px;
            display: flex;
            flex-direction: column;
        }
        
        .template-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 16px rgba(0,0,0,0.12);
        }
        
        .template-preview-container {
            height: 350px;
            overflow: hidden;
            position: relative;
            background: #f9f9f9;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid #eee;
        }
        
        .template-preview {
            width: 210mm; /* A4 width */
            height: 297mm; /* A4 height */
            transform: scale(0.2);
            transform-origin: top left;
            box-shadow: 0 0 8px rgba(0,0,0,0.1);
        }
        
        .template-info {
            padding: 15px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }
        
        .template-name {
            font-size: 18px;
            font-weight: 600;
            margin: 0 0 5px 0;
            color: #333;
        }
        
        .template-description {
            font-size: 14px;
            color: #666;
            margin: 0 0 10px 0;
            flex-grow: 1;
        }
        
        .template-category {
            display: inline-block;
            background: #e3f2fd;
            color: #1976d2;
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 500;
            margin-bottom: 10px;
            align-self: flex-start;
        }
        
        .select-template-btn {
            background: #4285f4;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 500;
            transition: background 0.2s;
            width: 100%;
        }
        
        .select-template-btn:hover {
            background: #3367d6;
        }
        
        .template-card.selected {
            border: 2px solid #4285f4;
            box-shadow: 0 0 0 4px rgba(66, 133, 244, 0.2);
        }
    `;
    document.head.appendChild(style);

    const templateGrid = templateSection.querySelector('.template-grid');
    if (!templateGrid) return;
    
    // Add each template to the grid
    Object.keys(invoiceTemplates).forEach(templateKey => {
        const template = invoiceTemplates[templateKey];
        
        const templateCard = document.createElement('div');
        templateCard.className = 'template-card';
        templateCard.dataset.template = templateKey;
        templateCard.dataset.category = template.category;
        
        // Create preview data with default values
        const previewData = {
            fromAddress: 'Your Company\n123 Business Rd\nCity, State 10001',
            toAddress: 'Customer Name\n456 Client Ave\nTown, State 20002',
            invoiceNumber: 'INV-2023-001',
            invoiceDate: new Date().toLocaleDateString(),
            supplierGst: '22AAAAA0000A1Z5',
            customerGst: '33BBBBB0000B2Z6',
            taxDetails: 'Payment due within 15 days. Late payments subject to 1.5% monthly interest.',
            subtotal: 1250.00,
            taxAmount: 225.00,
            items: [
                { description: 'Web Design Services', quantity: 10, price_per_unit: 100.00, gst: 18, amount: 1180.00 },
                { description: 'Domain Registration', quantity: 1, price_per_unit: 70.00, gst: 18, amount: 82.60 }
            ]
        };
        previewData.itemsHtml = generateItemsHtml(previewData.items);
        
        templateCard.innerHTML = `
            <div class="template-preview-container">
                <div class="template-preview">
                    ${template.html(previewData)}
                </div>
            </div>
            <div class="template-info">
                <span class="template-category">${template.category}</span>
                <h3 class="template-name">${template.name}</h3>
                <p class="template-description">${template.description}</p>
                <button class="select-template-btn" data-template="${templateKey}">
                    Select Template
                </button>
            </div>
        `;
        
        templateGrid.appendChild(templateCard);
    });
    
    // Add filter functionality
    const filterSelect = document.getElementById('template-filter');
    if (filterSelect) {
        filterSelect.addEventListener('change', function() {
            const filterValue = this.value;
            document.querySelectorAll('.template-card').forEach(card => {
                if (filterValue === 'all' || card.dataset.category === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // Add selection handlers
    document.querySelectorAll('.template-card, .select-template-btn').forEach(element => {
        element.addEventListener('click', function(e) {
            // Stop propagation if clicking the button
            if (e.target.classList.contains('select-template-btn')) {
                e.stopPropagation();
            }
            
            const card = e.target.closest('.template-card');
            if (!card) return;
            
            const templateKey = card.dataset.template;
            selectTemplate(templateKey);
        });
    });
}

let selectedTemplate = null;

function selectTemplate(templateKey) {
    selectedTemplate = templateKey;
    
    // Update UI to show selection
    document.querySelectorAll('.template-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    const selectedCard = document.querySelector(`.template-card[data-template="${templateKey}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
    
    // Show the "Use Template" button
    const useBtn = document.getElementById('use-template-btn');
    if (useBtn) {
        useBtn.style.display = 'block';
        useBtn.onclick = function() {
            applyTemplate(templateKey);
        };
    }
}

function applyTemplate(templateKey) {
    const template = invoiceTemplates[templateKey];
    if (!template) {
        console.error('Template not found:', templateKey);
        return;
    }

    // Save the selected template to localStorage
    localStorage.setItem('selectedInvoiceTemplate', templateKey);
    
    // Show success message
    Swal.fire({
        title: 'Template Selected!',
        text: `"${template.name}" template has been applied successfully.`,
        icon: 'success',
        confirmButtonText: 'Continue Editing',
        showCancelButton: true,
        cancelButtonText: 'View Invoice',
        reverseButtons: true
    }).then((result) => {
        if (result.isDismissed) {
            // If user clicks "View Invoice", generate and show the invoice
            generateAndShowInvoice(templateKey);
        } else {
            // Continue editing - you might want to update the editor UI
            updateEditorWithTemplate(templateKey);
        }
    });
}

function generateAndShowInvoice(templateKey) {
    const template = invoiceTemplates[templateKey];
    if (!template) return;

    // Get current form data
    const templateData = getCurrentFormData();
    templateData.itemsHtml = generateItemsHtml(templateData.items);

    // Create the invoice HTML
    const invoiceHtml = template.html(templateData);
    
    // Create a new window to display the invoice
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Invoice Preview</title>
            <style>
                body { margin: 0; padding: 0; background: #f5f5f5; }
                .invoice-container { 
                    max-width: 800px; 
                    margin: 20px auto; 
                    padding: 20px; 
                    background: white; 
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
                .actions {
                    text-align: center;
                    margin: 20px 0;
                }
                button {
                    padding: 10px 20px;
                    margin: 0 10px;
                    background: #4285f4;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                ${template.styles}
            </style>
        </head>
        <body>
            <div class="actions">
                <button onclick="window.print()">Print Invoice</button>
                <button onclick="window.close()">Close</button>
            </div>
            <div class="invoice-container">
                ${invoiceHtml}
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
}

function getCurrentFormData() {
    const data = {
        fromAddress: $('#fromAddress').val() || '',
        toAddress: $('#toAddress').val() || '',
        invoiceNumber: $('#invoiceNumber').val() || 'INV-001',
        invoiceDate: $('#invoiceDate').val() || new Date().toLocaleDateString(),
        supplierGst: $('#supplierGst').val() || '',
        customerGst: $('#customerGst').val() || '',
        taxDetails: $('#taxDetails').val() || '',
        subtotal: 0,
        taxAmount: 0,
        items: []
    };

    // Calculate totals and get items
    $('#itemsTableBody tr').each(function() {
        const row = $(this);
        const qty = parseFloat(row.find('.qty').val()) || 0;
        const rate = parseFloat(row.find('.rate').val()) || 0;
        const taxRate = parseFloat(row.find('.tax').val()) || 0;
        const amount = parseFloat(row.find('.amount').val()) || 0;
        
        data.items.push({
            description: row.find('.item-desc').val() || 'Item',
            quantity: qty,
            price_per_unit: rate,
            gst: taxRate,
            amount: amount
        });
        
        data.subtotal += amount / (1 + (taxRate / 100));
        data.taxAmount += amount - (amount / (1 + (taxRate / 100)));
    });

    return data;
}

function updateEditorWithTemplate(templateKey) {
    // This function would update the editor UI to reflect the selected template
    // For example, you might want to show a preview or apply template-specific styles
    
    const template = invoiceTemplates[templateKey];
    if (!template) return;

    // Update the preview section
    const previewContainer = document.getElementById('invoice-preview-container');
    if (previewContainer) {
        previewContainer.innerHTML = '';
        const preview = renderTemplatePreview(templateKey);
        previewContainer.appendChild(preview);
    }

    // You might also want to update the form to match the template style
    console.log(`Template "${template.name}" applied to editor`);
}

// Export for use in other files if needed
window.templateModule = {
    loadTemplateSelection,
    selectTemplate,
    applyTemplate,
    getTemplate: (key) => invoiceTemplates[key],
    renderTemplatePreview,
    generateItemsHtml
};

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the choose-template page
    if (document.getElementById('choose-template')) {
        loadTemplateSelection();
    }

    // If there's a selected template in localStorage, apply it
    const savedTemplate = localStorage.getItem('selectedInvoiceTemplate');
    if (savedTemplate && invoiceTemplates[savedTemplate]) {
        updateEditorWithTemplate(savedTemplate);
    }
});


function showTemplateSelection() {
    // Load the template grid
    templateModule.loadTemplateSelection();
    
    // Highlight the currently selected template
    const currentTemplate = localStorage.getItem('selectedInvoiceTemplate');
    if (currentTemplate) {
        const selectedCard = document.querySelector(`.template-card[data-template="${currentTemplate}"]`);
        if (selectedCard) {
            selectedCard.classList.add('selected');
        }
    }
}

function enableImagePanZoom(imgEl) {
    if (!imgEl) return;
    // Reset
    previewState.scale = 1;
    previewState.panX = 0;
    previewState.panY = 0;
    imgEl.style.transform = 'translate(0px,0px) scale(1)';
    imgEl.style.cursor = 'grab';

    let lastWheelTime = 0;
    let wheelTimeout = null;

    // Mouse events for panning
    imgEl.onmousedown = function(e) {
        if (e.button !== 0) return; // Only left mouse
        e.preventDefault();
        previewState.isDragging = true;
        previewState.startX = e.clientX - previewState.panX;
        previewState.startY = e.clientY - previewState.panY;
        imgEl.style.cursor = 'grabbing';
    };
    document.onmousemove = function(e) {
        if (!previewState.isDragging) return;
        previewState.panX = e.clientX - previewState.startX;
        previewState.panY = e.clientY - previewState.startY;
        applyImageTransform(imgEl);
    };
    document.onmouseup = function() {
        previewState.isDragging = false;
        imgEl.style.cursor = 'grab';
    };

    // Wheel zoom (mouse and trackpad)
    imgEl.onwheel = function(e) {
        // Only zoom if ctrlKey is pressed (for mouse), or if it's a pinch gesture (trackpad)
        // This prevents accidental zooming while scrolling
        if (!e.ctrlKey && Math.abs(e.deltaY) < 15) {
            // Likely a trackpad scroll, not a zoom
            return;
        }
        e.preventDefault();
        // Throttle zoom events
        const now = Date.now();
        if (now - lastWheelTime < 30) return;
        lastWheelTime = now;

        let scaleDelta = e.deltaY < 0 ? 0.1 : -0.1;
        let newScale = Math.min(previewState.maxScale, Math.max(previewState.minScale, previewState.scale + scaleDelta));
        // Zoom to mouse position
        const rect = imgEl.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        previewState.panX = mx - (mx - previewState.panX) * (newScale / previewState.scale);
        previewState.panY = my - (my - previewState.panY) * (newScale / previewState.scale);
        previewState.scale = newScale;
        applyImageTransform(imgEl);

        // Debounce to avoid flicker
        if (wheelTimeout) clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => { lastWheelTime = 0; }, 50);
    };

    // Touch events for mobile (pan and pinch-zoom)
    let lastTouchDist = null;
    imgEl.ontouchstart = function(e) {
        if (e.touches.length === 1) {
            previewState.isDragging = true;
            previewState.startX = e.touches[0].clientX - previewState.panX;
            previewState.startY = e.touches[0].clientY - previewState.panY;
        } else if (e.touches.length === 2) {
            previewState.isDragging = false;
            lastTouchDist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
        }
    };
    imgEl.ontouchmove = function(e) {
        if (previewState.isDragging && e.touches.length === 1) {
            previewState.panX = e.touches[0].clientX - previewState.startX;
            previewState.panY = e.touches[0].clientY - previewState.startY;
            applyImageTransform(imgEl);
        } else if (e.touches.length === 2 && lastTouchDist !== null) {
            const newDist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            let scaleDelta = (newDist - lastTouchDist) / 200; // Sensitivity
            let newScale = Math.min(previewState.maxScale, Math.max(previewState.minScale, previewState.scale + scaleDelta));
            previewState.scale = newScale;
            lastTouchDist = newDist;
            applyImageTransform(imgEl);
        }
    };
    imgEl.ontouchend = function(e) {
        previewState.isDragging = false;
        lastTouchDist = null;
    };
}

function enablePdfPanZoom(canvasEl) {
    if (!canvasEl) return;
    // Reset
    previewState.scale = 1.5;
    previewState.panX = 0;
    previewState.panY = 0;
    applyPdfTransform(canvasEl);

    let lastWheelTime = 0;
    let wheelTimeout = null;

    // Mouse events for panning
    canvasEl.onmousedown = function(e) {
        if (e.button !== 0) return;
        e.preventDefault();
        previewState.isDragging = true;
        previewState.startX = e.clientX - previewState.panX;
        previewState.startY = e.clientY - previewState.panY;
        canvasEl.style.cursor = 'grabbing';
    };
    document.onmousemove = function(e) {
        if (!previewState.isDragging) return;
        previewState.panX = e.clientX - previewState.startX;
        previewState.panY = e.clientY - previewState.startY;
        applyPdfTransform(canvasEl);
    };
    document.onmouseup = function() {
        previewState.isDragging = false;
        canvasEl.style.cursor = 'grab';
    };

    // Wheel zoom (mouse and trackpad)
    canvasEl.onwheel = function(e) {
        if (!e.ctrlKey && Math.abs(e.deltaY) < 15) {
            // Likely a trackpad scroll, not a zoom
            return;
        }
        e.preventDefault();
        const now = Date.now();
        if (now - lastWheelTime < 30) return;
        lastWheelTime = now;

        let scaleDelta = e.deltaY < 0 ? 0.1 : -0.1;
        let newScale = Math.min(previewState.maxScale, Math.max(previewState.minScale, previewState.scale + scaleDelta));
        previewState.scale = newScale;
        renderPdfPage(currentPage, previewState.scale);

        if (wheelTimeout) clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => { lastWheelTime = 0; }, 50);
    };

    // Touch events for mobile (pan and pinch-zoom)
    let lastTouchDist = null;
    canvasEl.ontouchstart = function(e) {
        if (e.touches.length === 1) {
            previewState.isDragging = true;
            previewState.startX = e.touches[0].clientX - previewState.panX;
            previewState.startY = e.touches[0].clientY - previewState.panY;
        } else if (e.touches.length === 2) {
            previewState.isDragging = false;
            lastTouchDist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
        }
    };
    canvasEl.ontouchmove = function(e) {
        if (previewState.isDragging && e.touches.length === 1) {
            previewState.panX = e.touches[0].clientX - previewState.startX;
            previewState.panY = e.touches[0].clientY - previewState.startY;
            applyPdfTransform(canvasEl);
        } else if (e.touches.length === 2 && lastTouchDist !== null) {
            const newDist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            let scaleDelta = (newDist - lastTouchDist) / 200;
            let newScale = Math.min(previewState.maxScale, Math.max(previewState.minScale, previewState.scale + scaleDelta));
            previewState.scale = newScale;
            lastTouchDist = newDist;
            renderPdfPage(currentPage, previewState.scale);
        }
    };
    canvasEl.ontouchend = function(e) {
        previewState.isDragging = false;
        lastTouchDist = null;
    };
}