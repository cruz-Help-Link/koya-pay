import React, { useState } from 'react';
import { ArrowLeft, Calendar, Info, Trash2, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';

interface InvoiceItem {
  id: number;
  quantity: number;
  price: number;
  amount: number;
}

export const CreateInvoiceScreen: React.FC = () => {
  const navigate = useNavigate();
  const [paymentType, setPaymentType] = useState<'crypto' | 'fiat'>('crypto');
  const [paymentMethod, setPaymentMethod] = useState<'koyapay' | 'external'>('koyapay');
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: 1, quantity: 0, price: 0, amount: 0 },
    { id: 2, quantity: 0, price: 0, amount: 0 }
  ]);

  // Form state
  const [clientName, setClientName] = useState('');
  const [selectedClient, setSelectedClient] = useState('');
  const [paymentNetwork, setPaymentNetwork] = useState('');
  const [paymentCurrency, setPaymentCurrency] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [invoiceTitle, setInvoiceTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [description, setDescription] = useState('');
  const [memo, setMemo] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const addItem = () => {
    const newId = items.length + 1;
    setItems([...items, { id: newId, quantity: 0, price: 0, amount: 0 }]);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: number, field: 'quantity' | 'price', value: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updated = { ...item, [field]: value };
        updated.amount = updated.quantity * updated.price;
        return updated;
      }
      return item;
    }));
    // Clear items error when user starts entering values
    setErrors({ ...errors, items: '' });
  };

  const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!clientName.trim()) {
      newErrors.clientName = "Client name is required";
    }

    if (!selectedClient) {
      newErrors.selectedClient = "Please select a client";
    }

    if (!paymentNetwork) {
      newErrors.paymentNetwork = "Payment network is required";
    }

    if (!paymentCurrency) {
      newErrors.paymentCurrency = "Payment currency is required";
    }

    if (!walletAddress.trim()) {
      newErrors.walletAddress = "Wallet address is required";
    }

    if (!invoiceTitle.trim()) {
      newErrors.invoiceTitle = "Invoice title is required";
    }

    if (!dueDate) {
      newErrors.dueDate = "Due date is required";
    }

    if (!description.trim()) {
      newErrors.description = "Description is required";
    }

    // Check if at least one item has quantity and price
    const hasValidItem = items.some(item => item.quantity > 0 && item.price > 0);
    if (!hasValidItem) {
      newErrors.items = "Please add at least one item with quantity and price";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveDraft = () => {
    // For now, just show a success message
    alert('Draft saved successfully!');
  };

  const handlePreviewAndSend = () => {
    if (validateForm()) {
      // If validation passes, proceed to preview
      alert('Invoice validated! Ready to preview and send.');
      // Later: navigate('/invoice-preview') or similar
    }
  };

  return (
    <div className="min-h-screen bg-[#E5DEFF] pb-20">
      {/* Max-width container for desktop */}
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-[#E5DEFF] px-6 pt-12 pb-6 sticky top-0 z-10">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 p-2 rounded-xl hover:bg-white/50 transition-colors inline-flex"
          >
            <ArrowLeft className="w-6 h-6 text-gray-800" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Create Invoice</h1>
          <p className="text-sm text-gray-600 mt-1">Create invoice to share with your client</p>
        </div>

      {/* Form Content */}
      <div className="px-6 space-y-6">
        {/* Client's Details */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-1">Client's Details</h2>
          <p className="text-sm text-gray-600 mb-3">Who are you creating invoice for</p>
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Add Client</label>
            <input
              type="text"
              placeholder="Choose Client"
              value={clientName}
              onChange={(e) => {
                setClientName(e.target.value);
                setErrors({ ...errors, clientName: '' });
              }}
              className="w-full px-4 py-3 rounded-xl bg-white/60 border-2 border-transparent focus:border-[#221144] text-gray-900 placeholder-gray-400 transition-colors"
            />
            {errors.clientName && <p className="mt-1 text-sm text-red-500">{errors.clientName}</p>}
          </div>
        </div>

        {/* Your Details */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-1">Your Details</h2>
          <p className="text-sm text-gray-600 mb-3">Provide your details via which you will receive the payment</p>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-900 mb-2">Add Client</label>
            <div className="relative">
              <select
                value={selectedClient}
                onChange={(e) => {
                  setSelectedClient(e.target.value);
                  setErrors({ ...errors, selectedClient: '' });
                }}
                className={`w-full px-4 py-3 rounded-xl bg-white/60 border-2 border-transparent focus:border-[#221144] transition-colors appearance-none ${
                  selectedClient ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                <option value="">Select...</option>
                <option value="client1">Client 1</option>
                <option value="client2">Client 2</option>
                <option value="client3">Client 3</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
            </div>
            {errors.selectedClient && <p className="mt-1 text-sm text-red-500">{errors.selectedClient}</p>}
          </div>

          {/* Crypto/Fiat Toggle */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => setPaymentType('crypto')}
              className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all ${
                paymentType === 'crypto'
                  ? 'bg-white/80 text-gray-900'
                  : 'bg-white/40 text-gray-600'
              }`}
            >
              Crypto
            </button>
            <button
              onClick={() => setPaymentType('fiat')}
              className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all ${
                paymentType === 'fiat'
                  ? 'bg-white/80 text-gray-900'
                  : 'bg-white/40 text-gray-600'
              }`}
            >
              Fiat
            </button>
          </div>

          {/* Payment Method */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <label className="text-sm font-semibold text-gray-900">How do you want to be paid?</label>
              <Info className="w-4 h-4 text-gray-600" />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === 'koyapay'}
                  onChange={() => setPaymentMethod('koyapay')}
                  className="w-5 h-5 accent-black"
                />
                <span className="text-gray-900">Pay to Koyapay wallet</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  checked={paymentMethod === 'external'}
                  onChange={() => setPaymentMethod('external')}
                  className="w-5 h-5 accent-black"
                />
                <span className="text-gray-900">Pay to External wallet</span>
              </label>
            </div>
          </div>

          {/* Payment Network */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-sm font-semibold text-gray-900">Payment Network</label>
              <Info className="w-4 h-4 text-gray-600" />
            </div>
            <div className="relative">
              <select
                value={paymentNetwork}
                onChange={(e) => {
                  setPaymentNetwork(e.target.value);
                  setErrors({ ...errors, paymentNetwork: '' });
                }}
                className={`w-full px-4 py-3 rounded-xl bg-white/60 border-2 border-transparent focus:border-[#221144] transition-colors appearance-none ${
                  paymentNetwork ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                <option value="">Select...</option>
                <option value="ethereum">Ethereum</option>
                <option value="bsc">Binance Smart Chain</option>
                <option value="polygon">Polygon</option>
                <option value="solana">Solana</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
            </div>
            {errors.paymentNetwork && <p className="mt-1 text-sm text-red-500">{errors.paymentNetwork}</p>}
          </div>

          {/* Payment Currency */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-sm font-semibold text-gray-900">Payment Currency</label>
              <Info className="w-4 h-4 text-gray-600" />
            </div>
            <div className="relative">
              <select
                value={paymentCurrency}
                onChange={(e) => {
                  setPaymentCurrency(e.target.value);
                  setErrors({ ...errors, paymentCurrency: '' });
                }}
                className={`w-full px-4 py-3 rounded-xl bg-white/60 border-2 border-transparent focus:border-[#221144] transition-colors appearance-none ${
                  paymentCurrency ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                <option value="">Select...</option>
                <option value="usdt">USDT</option>
                <option value="usdc">USDC</option>
                <option value="eth">ETH</option>
                <option value="btc">BTC</option>
                <option value="bnb">BNB</option>
                <option value="sol">SOL</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
            </div>
            {errors.paymentCurrency && <p className="mt-1 text-sm text-red-500">{errors.paymentCurrency}</p>}
          </div>

          {/* Wallet Address */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-sm font-semibold text-gray-900">Wallet Address</label>
              <Info className="w-4 h-4 text-gray-600" />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Add Wallet"
                value={walletAddress}
                onChange={(e) => {
                  setWalletAddress(e.target.value);
                  setErrors({ ...errors, walletAddress: '' });
                }}
                className="w-full px-4 py-3 rounded-xl bg-white/60 border-2 border-transparent focus:border-[#221144] text-gray-900 placeholder-gray-400 transition-colors"
              />
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
            </div>
            {errors.walletAddress && <p className="mt-1 text-sm text-red-500">{errors.walletAddress}</p>}
          </div>
        </div>

        {/* Invoice Details */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-1">Invoice Details</h2>
          <p className="text-sm text-gray-600 mb-3">Enter invoice details here</p>

          {/* Invoice Title */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-900 mb-2">Invoice Title</label>
            <input
              type="text"
              placeholder="Invoice #1"
              value={invoiceTitle}
              onChange={(e) => {
                setInvoiceTitle(e.target.value);
                setErrors({ ...errors, invoiceTitle: '' });
              }}
              className="w-full px-4 py-3 rounded-xl bg-white/60 border-2 border-transparent focus:border-[#221144] text-gray-900 transition-colors"
            />
            {errors.invoiceTitle && <p className="mt-1 text-sm text-red-500">{errors.invoiceTitle}</p>}
          </div>

          {/* Due Date */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-900 mb-2">Due Date</label>
            <div className="relative">
              <input
                type="date"
                value={dueDate}
                onChange={(e) => {
                  setDueDate(e.target.value);
                  setErrors({ ...errors, dueDate: '' });
                }}
                className="w-full px-4 py-3 rounded-xl bg-white/60 border-2 border-transparent focus:border-[#221144] text-gray-900 transition-colors"
              />
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
            </div>
            {errors.dueDate && <p className="mt-1 text-sm text-red-500">{errors.dueDate}</p>}
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-900 mb-2">Description</label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setErrors({ ...errors, description: '' });
              }}
              className="w-full px-4 py-3 rounded-xl bg-white/60 border-2 border-transparent focus:border-[#221144] text-gray-900 placeholder-gray-400 resize-none transition-colors"
            />
            {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
          </div>

          {/* Items */}
          {items.map((item, index) => (
            <div key={item.id} className="mb-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Quantity</label>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateItem(item.id, 'quantity', Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border-2 border-transparent focus:border-[#221144] text-gray-900 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Price</label>
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) => updateItem(item.id, 'price', Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border-2 border-transparent focus:border-[#221144] text-gray-900 transition-colors"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Single Amount field with trash icon */}
          <div className="mb-4">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-900 mb-2">Amount</label>
                <input
                  type="text"
                  value={totalAmount || 0}
                  readOnly
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border-2 border-transparent text-gray-900"
                />
              </div>
              <button
                onClick={() => items.length > 1 && removeItem(items[items.length - 1].id)}
                disabled={items.length <= 1}
                className={`mt-7 p-3 rounded-xl transition-colors ${
                  items.length > 1 ? 'bg-white/60 hover:bg-red-100' : 'bg-white/40 cursor-not-allowed opacity-50'
                }`}
              >
                <Trash2 className="w-5 h-5 text-gray-900" />
              </button>
            </div>
          </div>

          {/* Add Item */}
          <button
            onClick={addItem}
            className="text-gray-900 font-semibold text-sm mb-4"
          >
            + Add an item
          </button>
          {errors.items && <p className="mt-1 mb-4 text-sm text-red-500">{errors.items}</p>}

          {/* Memo */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-900 mb-2">Memo</label>
            <textarea
              rows={4}
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/60 border-2 border-transparent focus:border-[#221144] text-gray-900 placeholder-gray-400 resize-none transition-colors"
            />
          </div>

          {/* Summary */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-semibold text-gray-900">Amount without tax</span>
              <span className="text-sm text-gray-900">{totalAmount}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-semibold text-gray-900">Total tax Amount</span>
              <span className="text-sm text-gray-900">0</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-semibold text-gray-900">Total Amount</span>
              <span className="text-sm text-gray-900">{totalAmount}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-semibold text-gray-900">Due</span>
              <span className="text-sm text-gray-900">{totalAmount}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pb-6">
          <button
            onClick={handleSaveDraft}
            className="flex-1 py-4 px-6 rounded-2xl bg-white/60 text-gray-900 font-semibold hover:bg-white/80 transition-colors"
          >
            Save Draft
          </button>
          <button
            onClick={handlePreviewAndSend}
            className="flex-1 py-4 px-6 rounded-2xl bg-[#221144] text-white font-semibold hover:bg-[#1a0d33] transition-colors"
          >
            Preview & Send
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};
