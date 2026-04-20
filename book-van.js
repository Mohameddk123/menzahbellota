/* =========================================
   VAN & CAMPER BOOKING PAGE — book-van.js
   Reads ?pitch=X from URL, populates the
   summary panel, and sends booking info
   to WhatsApp on form submit.
   ========================================= */

const WHATSAPP_NUMBER  = '905355798871';
const PRICE_PER_NIGHT  = 80;

const PITCHES = {
  1: {
    name:     'Menzah Bellota — Pitch 1',
    subtitle: 'Forest Pitch · Shaded & Peaceful',
    img:      'images/Van & Camper Pitches.webp',
    beds:     '⚡  Electric Hookup',
    guests:   '👥  Max 4 Guests',
  },
  2: {
    name:     'Menzah Bellota — Pitch 2',
    subtitle: 'Panorama Pitch · Open Mountain Views',
    img:      'images/Van & Camper Pitches.webp',
    beds:     '⚡  Electric Hookup',
    guests:   '👥  Max 4 Guests',
  },
  3: {
    name:     'Menzah Bellota — Pitch 3',
    subtitle: 'Large Pitch · Big Vehicles Welcome',
    img:      'images/Van & Camper Pitches.webp',
    beds:     '⚡  Electric Hookup',
    guests:   '👥  Max 6 Guests',
  },
  4: {
    name:     'Menzah Bellota — Pitch 4',
    subtitle: 'Private Pitch · Secluded & Quiet',
    img:      'images/Van & Camper Pitches.webp',
    beds:     '⚡  Electric Hookup',
    guests:   '👥  Max 4 Guests',
  },
};

/* ---- 1. Read ?pitch= param & populate summary ---- */
function loadPitch() {
  const params   = new URLSearchParams(window.location.search);
  const pitchId  = parseInt(params.get('pitch')) || 1;
  const pitch    = PITCHES[pitchId] || PITCHES[1];

  document.getElementById('summaryImg').src              = pitch.img;
  document.getElementById('summaryImg').alt              = pitch.name;
  document.getElementById('summaryRoomNum').textContent  = String(pitchId).padStart(2, '0');
  document.getElementById('summaryName').textContent     = pitch.name;
  document.getElementById('summarySubtitle').textContent = pitch.subtitle;
  document.getElementById('summaryBeds').textContent     = pitch.beds;
  document.getElementById('summaryGuests').textContent   = pitch.guests;
  document.getElementById('hiddenRoom').value            = pitch.name;
  document.title = `Reserve ${pitch.name} — Menzah Bellota`;
}

/* ---- 2. Flatpickr date pickers ---- */
function setupDatePickers() {
  const nightsSummary = document.getElementById('nightsSummary');
  const nightsText    = document.getElementById('nightsText');
  const totalPrice    = document.getElementById('totalPrice');
  const checkInEl     = document.getElementById('checkIn');
  const checkOutEl    = document.getElementById('checkOut');

  const commonConfig = {
    dateFormat:    'd M Y',
    minDate:       'today',
    disableMobile: true,
    locale: {
      firstDayOfWeek: 1,
      weekdays: {
        shorthand: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        longhand:  ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      },
      months: {
        shorthand: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        longhand:  ['January','February','March','April','May','June','July','August','September','October','November','December'],
      },
    },
  };

  const fpIn = flatpickr(checkInEl, {
    ...commonConfig,
    onClose(selectedDates) {
      if (selectedDates[0]) {
        fpOut.set('minDate', new Date(selectedDates[0].getTime() + 86400000));
        fpOut.open();
      }
      updateNights();
    },
  });

  const fpOut = flatpickr(checkOutEl, {
    ...commonConfig,
    onClose() { updateNights(); },
  });

  function updateNights() {
    if (!checkInEl.value || !checkOutEl.value) {
      nightsSummary.style.display = 'none';
      return;
    }
    const nights = Math.round((fpOut.selectedDates[0] - fpIn.selectedDates[0]) / 86400000);
    if (nights > 0) {
      nightsText.innerHTML  = `${nights} night${nights > 1 ? 's' : ''} &nbsp;·&nbsp; ${PRICE_PER_NIGHT} DH/night = `;
      totalPrice.textContent = `${nights * PRICE_PER_NIGHT} DH`;
      nightsSummary.style.display = 'flex';
    }
  }
}

/* ---- 3. Form → WhatsApp ---- */
function setupForm() {
  const form = document.getElementById('bookForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name      = document.getElementById('guestName').value.trim();
    const email     = document.getElementById('guestEmail').value.trim();
    const phone     = document.getElementById('guestPhone').value.trim();
    const checkIn   = document.getElementById('checkIn').value.trim();
    const checkOut  = document.getElementById('checkOut').value.trim();
    const adults    = document.getElementById('guestAdults').value;
    const children  = document.getElementById('guestChildren').value;
    const message   = document.getElementById('guestMessage').value.trim();
    const pitchName = document.getElementById('hiddenRoom').value;

    if (!checkIn || !checkOut) {
      document.getElementById('checkIn').focus();
      return;
    }

    const lines = [
      '🚐 *PITCH RESERVATION — Menzah Bellota*',
      '━━━━━━━━━━━━━━━━━━━━━',
      `🅿️ *Pitch:* ${pitchName}`,
      `💰 *Price:* ${PRICE_PER_NIGHT} DH / night`,
      '━━━━━━━━━━━━━━━━━━━━━',
      `👤 *Name:* ${name}`,
    ];

    if (phone)  lines.push(`📞 *Phone:* ${phone}`);
    if (email)  lines.push(`📧 *Email:* ${email}`);
    lines.push(`📅 *Arrival:*   ${checkIn}`);
    lines.push(`📅 *Departure:* ${checkOut}`);
    lines.push(`👨‍👩‍👧 *Guests:* ${adults} adult(s)${children !== '0' ? `, ${children} child(ren)` : ''}`);

    if (message) {
      lines.push('━━━━━━━━━━━━━━━━━━━━━');
      lines.push(`💬 *Vehicle & Requests:*\n${message}`);
    }

    lines.push('━━━━━━━━━━━━━━━━━━━━━');
    lines.push('_Sent from menzahbellota.ma_');

    const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;

    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Opening WhatsApp…';
    btn.disabled = true;

    setTimeout(() => {
      window.open(waURL, '_blank');
      setTimeout(() => {
        btn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.104.55 4.078 1.504 5.797L0 24l6.383-1.474A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.805 9.805 0 01-5.028-1.38l-.36-.214-3.733.862.888-3.617-.235-.372A9.772 9.772 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z"/>
          </svg>
          Send Booking Request via WhatsApp`;
        btn.disabled = false;
      }, 3000);
    }, 600);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadPitch();
  setupDatePickers();
  setupForm();
});
